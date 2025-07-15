"use client";
import { Listbox } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const LOCATIONS = ["Bandung", "Jakarta", "Surabaya"] as const;

interface Props {
  value: string | null;
  onChange: (loc: string | null) => void;
}

export default function LocationSelect({ value, onChange }: Props) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative w-72 text-sm">
        <Listbox.Button className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-3">
          {value ?? "Location"}
          <BiChevronDown className="h-5 w-5" />
        </Listbox.Button>

        <Listbox.Options className="absolute z-20 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          <Listbox.Option
            value={null}
            className="cursor-pointer px-4 py-2 ui-active:bg-red-100"
          >
            All locations
          </Listbox.Option>
          {LOCATIONS.map((loc) => (
            <Listbox.Option
              key={loc}
              value={loc}
              className="cursor-pointer px-4 py-2 ui-active:bg-red-100"
            >
              {loc}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
