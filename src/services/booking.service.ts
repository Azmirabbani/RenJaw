import { prisma } from "@/lib/prisma";

export const getAllBookings = () => {
  return prisma.booking.findMany({
    include: {
      user: true,
      vehicle: true,
    },
  });
};

export const getBookingById = (id: number) => {
  return prisma.booking.findUnique({
    where: { id },
    include: {
      user: true,
      vehicle: true,
    },
  });
};

export const createBooking = async (data: {
  userId: number;
  vehicleId: number;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
}) => {
  const conflict = await prisma.booking.findFirst({
    where: {
      vehicleId: data.vehicleId,
      status: "ACTIVE",
      OR: [
        {
          startDate: { lte: data.endDate },
          endDate: { gte: data.startDate },
        },
      ],
    },
  });

  if (conflict) {
    throw new Error("Mobil sudah dibooking di tanggal tersebut.");
  }

  return prisma.booking.create({ data });
};

export const updateBooking = (
  id: number,
  data: Partial<{
    startDate: Date;
    endDate: Date;
    totalPrice: number;
    status: "ACTIVE" | "CANCELLED" | "RETURNED";
  }>
) => {
  return prisma.booking.update({
    where: { id },
    data,
  });
};

export const deleteBooking = (id: number) => {
  return prisma.booking.delete({
    where: { id },
  });
};

export const getBookingsByUserId = (userId: number) => {
  return prisma.booking.findMany({
    where: { userId },
    include: {
      vehicle: true,
    },
  });
};
