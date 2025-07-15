import { prisma } from "@/lib/prisma";

export const getAllVehicles = () => prisma.vehicle.findMany();

export const getAllVehicleById = (id: number) =>
  prisma.vehicle.findUnique({
    where: { id },
  });

export const createVehicle = (data: {
  name: string;
  location: string;
  price: number;
  image: string;
}) =>
  prisma.vehicle.create({
    data,
  });

export const updateVehicle = (
  id: number,
  data: {
    name?: string;
    location?: string;
    price?: number;
    image?: string;
  }
) =>
  prisma.vehicle.update({
    where: { id },
    data,
  });

export const deleteVehicle = (id: number) =>
  prisma.vehicle.delete({
    where: { id },
  });
