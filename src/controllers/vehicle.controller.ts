import { NextRequest, NextResponse } from "next/server";
import {
  getAllVehicles,
  getAllVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "@/services/vehicle.service";
import { getUserById } from "@/services/user.service";

// GET
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");

  if (idParam) {
    const vehicle = await getAllVehicleById(Number(idParam));
    if (!vehicle) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }
    return NextResponse.json(vehicle);
  }

  const vehicles = await getAllVehicles();
  return NextResponse.json(vehicles);
}

// POST
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, ...data } = body;

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  const user = await getUserById(Number(userId));
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });
  }

  const vehicle = await createVehicle(data);
  return NextResponse.json(vehicle, { status: 201 });
}

// PUT
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { userId, id, ...data } = body;

  if (!userId || !id) {
    return NextResponse.json({ error: "userId and id are required" }, { status: 400 });
  }

  const user = await getUserById(Number(userId));
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });
  }

  const updated = await updateVehicle(Number(id), data);
  return NextResponse.json(updated);
}

// DELETE
export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { userId, id } = body;

  if (!userId || !id) {
    return NextResponse.json({ error: "userId and id are required" }, { status: 400 });
  }

  const user = await getUserById(Number(userId));
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });
  }

  const deleted = await deleteVehicle(Number(id));
  return NextResponse.json({ message: "Deleted", deleted });
}
