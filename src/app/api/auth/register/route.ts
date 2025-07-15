import { NextRequest, NextResponse } from "next/server";
import { createByUser, getUserByEmail } from "@/services/user.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, phone, role } = body;

    // Validasi field wajib
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Cek apakah email sudah digunakan
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Buat user baru
    const user = await createByUser({
      name,
      email,
      password,
      phone,
      role: role === "ADMIN" ? "ADMIN" : "USER", // hanya izinkan ADMIN jika dikirim secara eksplisit
    });

    return NextResponse.json(
      {
        message: "User created",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
