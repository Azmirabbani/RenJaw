// src/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  createByUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
} from "@/services/user.service";

export async function GET(req: NextRequest) {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    console.error("GET USER ERROR:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = await createByUser(body);
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.error("POST USER ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { adminId, id, ...data } = body;

    if (!adminId || !id) {
      return NextResponse.json({ error: "adminId and user id are required" }, { status: 400 });
    }

    const admin = await getUserById(Number(adminId));
    if (!admin || admin.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden: Admin only" }, { status: 403 });
    }

    const updated = await updateUser(Number(id), data);
    return NextResponse.json(updated, { status: 200 });
  } catch (error: any) {
    console.error("PUT USER ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { adminId, id } = body;

    if (!adminId || !id) {
      return NextResponse.json({ error: "adminId and user id are required" }, { status: 400 });
    }

    const admin = await getUserById(Number(adminId));
    if (!admin || admin.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden: Admin only" }, { status: 403 });
    }

    const deleted = await deleteUser(Number(id));
    return NextResponse.json({ message: "User deleted", deleted }, { status: 200 });
  } catch (error: any) {
    console.error("DELETE USER ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
