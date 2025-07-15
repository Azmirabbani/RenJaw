import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "@/services/user.service";
// import jwt from "jsonwebtoken";
// const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password)
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });

  const user = await getUserByEmail(email);
  if (!user || user.password !== password)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  return NextResponse.json(
    {
      message: "Login sukses (tanpa JWT)",
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    },
    { status: 200 }
  );
}
