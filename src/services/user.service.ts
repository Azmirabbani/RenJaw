import { prisma } from "@/lib/prisma";

export const getAllUsers = () => prisma.user.findMany();

export const getUserByEmail = (email: string) =>
  prisma.user.findUnique({ where: { email } });

export const createByUser = async (data: {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN";
  phone?: string; // ✅ tambahkan ini
}) => {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone, // ✅ tambahkan ini juga
      role: data.role || "USER",
    },
  });
};

export const getUserById = (id: number) =>
  prisma.user.findUnique({ where: { id } });

export const updateUser = (
  id: number,
  data: {
    name?: string;
    email?: string;
    password?: string;
    phone?: string; // ✅ tambahkan ini juga
    role?: "USER" | "ADMIN";
  }
) => prisma.user.update({ where: { id }, data });

export const deleteUser = (id: number) =>
  prisma.user.delete({ where: { id } });
