"use client";
import { useState, useMemo } from "react";
import LocationSelect from "@/components/ui/LocationSelect";
import CarCard from "@/components/CarCard";
import type { Car } from "@/lib/cars/db";

export default function CarListClient({ initialCars }: { initialCars: Car[] }) {
  const [loc, setLoc] = useState<string | null>(null);

  const filtered = useMemo(
    () => (loc ? initialCars.filter((c) => c.location === loc) : initialCars),
    [loc, initialCars]
  );

  return (
    <>
      {/* dropdown */}
      <LocationSelect value={loc} onChange={setLoc} />

      {/* grid */}
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </>
  );
}
