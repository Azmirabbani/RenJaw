// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET!;
// if (!JWT_SECRET) {
//   throw new Error("JWT_SECRET is not defined in environment variables.");
// }

// // Payload yang bisa kamu sesuaikan (misal: id dan role)
// export const signToken = (payload: { id: number; role: "USER" | "ADMIN" }) => {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
// };

// // Verifikasi token dan mengembalikan payload-nya
// export const verifyToken = (token: string) => {
//   return jwt.verify(token, JWT_SECRET) as { id: number; role: "USER" | "ADMIN" };
// };
