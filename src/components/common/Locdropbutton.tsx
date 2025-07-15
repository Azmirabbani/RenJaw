"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const locations = ["Jakarta", "Bandung", "Surabaya", "Bali"];

const Locdropbutton = ({ onSelect }: { onSelect: (loc: string) => void }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Location");

  const handleSelect = (loc: string) => {
    setSelected(loc);
    setOpen(false);
    onSelect(loc); // kirim ke parent
  };

  return (
    <div className="relative w-72">
      <div
        className="bg-white p-2 flex items-center justify-between border border-black cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <BiChevronDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <ul className="absolute top-full mt-1 z-10 w-full bg-white border border-gray-200 shadow-md">
          {locations.map((loc) => (
            <li
              key={loc}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(loc)}
            >
              {loc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Locdropbutton;
