"use client";

import { useState, useEffect } from "react";

import FormCheckbox from "../FormCheckbox";
import FormDropdown from "../FormDropdown";
import FormInput from "../FormInput";
import InputField from "@/components/InputField";

import { fetchCountries } from "@/utils/fetchCountries";
import { ListboxOption } from "@headlessui/react";

export default function ProfileForm() {
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
    <form
      autoComplete="true"
      id="personal-info"
      className="mr-10 flex max-w-3xl flex-col gap-14 text-lg font-medium text-white">
      <div className="flex flex-col gap-6">
        <FormInput placeholder={"First name"} id={"firstname"} />
        <FormInput placeholder={"Last name"} id={"lastname"} />
        <FormInput placeholder={"Email"} id={"email"} />
        <FormDropdown value={selectedCountry} onChange={handleSelectChange}>
          {countries
            .sort((a, b) => ("" + a.name.common).localeCompare(b.name.common))
            .map((countries, index) => (
              <ListboxOption
                key={index}
                value={countries.name.common}
                className="group relative cursor-pointer select-none p-3 text-white/80 data-[focus]:bg-white/30 data-[focus]:text-white">
                <div className="flex items-center">
                  <span className="block truncate font-medium group-data-[selected]:font-semibold">
                    {countries.name.common}
                  </span>
                </div>
              </ListboxOption>
            ))}
        </FormDropdown>
      </div>
      <div className="flex flex-col gap-6">
        <p>What is your main activity/activities?</p>
        <div className="ml-4 flex flex-col items-start justify-center gap-4">
          <FormCheckbox id={"Video"} />
          <FormCheckbox id={"Design"} />
          <FormCheckbox id={"Development"} />
          <FormCheckbox id={"Sports"} />
          <FormCheckbox id={"Medical"} />
          <FormCheckbox id={"Inspections"} />
        </div>
        <InputField placeholder={"Other"} id={"other"} isLabelled={false} />
      </div>
      <div className="flex flex-col gap-6">
        <p>User handle and password</p>
        <FormInput
          placeholder={"User name, your Pactto handle (e.g. johnsmith)"}
          id={"username"}
        />
        <FormInput placeholder={"Password"} id={"password"} type={"password"} />
        <FormInput
          placeholder={"Confirm password"}
          id={"confirm-password"}
          type={"password"}
        />
      </div>
    </form>
  );
}
