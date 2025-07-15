"use client";

import { useState } from "react";
import Catdropbutto from "@/components/common/Catdropbutto";
import Locdropbutton from "@/components/common/Locdropbutton";
import CarsCard from "@/components/sections/CarsCard";
import { cars as allCars } from "@/components/sections/CarsCard/cars";

export default function CarsPage() {
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredCars = allCars.filter((car) => {
    const matchLocation = locationFilter
      ? car.location === locationFilter
      : true;
    const matchCategory = categoryFilter
      ? car.category === categoryFilter
      : true;
    return matchLocation && matchCategory;
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-black uppercase mb-[30px]">
        find your car
      </h1>

      <div className="flex flex-row gap-x-[30px] mb-10">
        <Locdropbutton onSelect={(loc) => setLocationFilter(loc)} />
        <Catdropbutto onSelect={(cat) => setCategoryFilter(cat)} />
      </div>

      <h2 className="text-2xl font-bold text-[#D80032] underline">Our cars</h2>

      <div
        className="grid gap-x-[50px] gap-y-[50px]
          grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
          place-items-center sm:place-items-start"
      >
        {filteredCars.map((car) => (
          <CarsCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}
