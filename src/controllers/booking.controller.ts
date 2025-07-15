import { NextRequest, NextResponse } from "next/server";
import {
  createBooking,
  getAllBookings,
  getBookingsByUserId,
  updateBooking,
  deleteBooking,
} from "@/services/booking.service";
import { getUserById } from "@/services/user.service";

export async function GET(req: NextRequest) {
  const userIdParam = req.nextUrl.searchParams.get("userId");
  if (!userIdParam) {
    return NextResponse.json(
      { error: "userId query is required" },
      { status: 400 }
    );
  }

  const user = await getUserById(Number(userIdParam));
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (user.role === "ADMIN") {
    const bookings = await getAllBookings();
    return NextResponse.json(bookings);
  }

  const bookings = await getBookingsByUserId(user.id);
  return NextResponse.json(bookings);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, vehicleId, startDate, endDate, totalPrice } = body;

  if (!userId || !vehicleId || !startDate || !endDate || !totalPrice) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const user = await getUserById(Number(userId));
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (user.role !== "ADMIN" && user.id !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const booking = await createBooking({
      userId,
      vehicleId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalPrice,
    });
    return NextResponse.json(booking, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { userId, id, startDate, endDate, ...rest } = body;

  if (!userId || !id)
    return NextResponse.json(
      { error: "userId and id are required" },
      { status: 400 }
    );

  const user = await getUserById(Number(userId));
  if (!user || user.role !== "ADMIN")
    return NextResponse.json(
      { error: "Forbidden: admin only" },
      { status: 403 }
    );

  try {
    const updated = await updateBooking(Number(id), {
      ...rest,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { userId, id } = body;

  if (!userId || !id)
    return NextResponse.json(
      { error: "userId and id are required" },
      { status: 400 }
    );

  const user = await getUserById(Number(userId));
  if (!user || user.role !== "ADMIN")
    return NextResponse.json(
      { error: "Forbidden: admin only" },
      { status: 403 }
    );

  try {
    const deleted = await deleteBooking(Number(id));
    return NextResponse.json({ message: "Booking deleted", deleted });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
