"use client";

import { fetchCountries } from "@/utils/fetchCountries";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";

export default function FormDropdown() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const countryNames = await fetchCountries();
      setCountries(countryNames);
    };

    getCountries();
  }, []);

  function handleSelectChange(event) {
    setSelectedCountry(event);
  }

  return (
    <Listbox value={selectedCountry} onChange={handleSelectChange}>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white/10 p-3 font-medium text-white/80 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0">
          <span className="flex items-center">
            <span
              className={`${selectedCountry ? "text-white/80" : "text-white/50"} block truncate text-lg`}>
              {selectedCountry ? selectedCountry : "Country"}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ExpandMoreIcon
              aria-hidden="true"
              className="text-gray-400 h-5 w-5"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="mt-1 max-h-56 w-full overflow-auto rounded-md bg-white/10 text-lg text-white/80 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in">
          {countries
            .sort((a, b) => ("" + a.name.common).localeCompare(b.name.common))
            .map((country, index) => (
              <ListboxOption
                key={index}
                value={country.name.common}
                className="group relative cursor-pointer select-none p-3 text-white/80 data-[focus]:bg-white/30 data-[focus]:text-white">
                <div className="flex items-center">
                  <span className="block truncate font-medium group-data-[selected]:font-semibold">
                    {country.name.common}
                  </span>
                </div>
              </ListboxOption>
            ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
