// lib/db.ts
export interface Car {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
}

const MOCK: Car[] = [
  {
    id: 1,
    name: "Lexus CTH200H",
    price: 200,
    location: "Jakarta",
    image: "/LexusCT200h.png",
  },
  {
    id: 2,
    name: "Jaguar F‑Pace",
    price: 132,
    location: "Bandung",
    image: "/JaguarFPace.png",
  },
  {
    id: 3,
    name: "Mercedes Benz",
    price: 132,
    location: "Surabaya",
    image: "/MercedesBenz.png",
  },
  {
    id: 4,
    name: "Lexus D3k0LA",
    price: 200,
    location: "Jakarta",
    image: "/LexusCT200h.png",
  },
  {
    id: 5,
    name: "Jaguar Pace-M",
    price: 132,
    location: "Bandung",
    image: "/JaguarFPace.png",
  },
  {
    id: 6,
    name: "Mersides Bendova",
    price: 132,
    location: "Surabaya",
    image: "/MercedesBenz.png",
  },
];

export async function getCars(): Promise<Car[]> {
  // jika pakai DB: return prisma.car.findMany()
  // jika pakai REST: const res = await fetch(...)
  return MOCK;
}
