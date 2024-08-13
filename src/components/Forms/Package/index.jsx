"use client";
import { useState } from "react";
import { currencies } from "@/lib/currencyData";

import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Switch,
} from "@headlessui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

import FormInput from "../FormInput";
import Button from "@/components/Button";

export default function PackageForm() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  function handleSelectChange(event) {
    setSelectedCurrency(event);
  }

  return (
    <form id="package-info" className="mr-10 w-full">
      <div className="flex w-full flex-col">
        <div className="flex items-start gap-6">
          <Field className="flex items-center gap-2">
            <Label className="text-sm font-medium text-gray">
              Package is unplublished
            </Label>
            <Switch className="group inline-flex h-6 w-11 items-center rounded-full bg-gray/40 transition data-[checked]:bg-yellow">
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <button className="text-sm font-medium text-gray">
            Delete package <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="my-10 flex gap-12 border border-yellow bg-neutral-950 px-12 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10">
          <span className="inline-flex h-fit w-full flex-col border-b-2 border-b-yellow pb-2">
            <h4 className="text-center text-sm text-white">
              1. Describe your package
            </h4>
          </span>
          <p className="w-2/3 text-pretty text-center text-sm font-medium text-gray">
            Users will see this info on your expert page or in your
            integrations, view example.
          </p>
          <div className="flex w-full flex-col gap-8">
            <div className="flex w-full flex-col items-start gap-2">
              <FormInput
                label={"Package Name"}
                isLabelled={true}
                placeholder={"Title"}
                id={"title"}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <label
                className="text-center text-sm text-white"
                htmlFor="description">
                Package Description
              </label>
              <textarea
                id="description"
                placeholder="Description"
                className="max-h-full w-full rounded-md border-none bg-white/10 p-3 text-base font-medium text-white/80 outline-0 placeholder:text-base placeholder:text-white/50 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <FormInput
                label={"Package details (user will view only)"}
                isLabelled={true}
                placeholder={"Add details"}
                id={"details"}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <FormInput
                label={"Package instructions (customers will view too)"}
                isLabelled={true}
                placeholder={"Add Instructions"}
                id={"instructions"}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-10">
          <span className="inline-flex h-fit w-full flex-col border-b-2 border-b-yellow pb-2">
            <h4 className="text-center text-sm text-white">
              2. Define requirements for your package
            </h4>
          </span>
          <p className="w-2/3 text-pretty text-center text-sm font-medium text-gray">
            Users will be able to upload items for you to review. The items can
            be files, links or combinations.
          </p>
          <div className="flex w-full flex-col gap-10">
            <div className="flex w-full flex-col items-start gap-4">
              <label
                className="text-center text-sm text-white"
                htmlFor="description">
                Review type
              </label>
              <ul className="ml-3 flex w-full flex-col gap-6">
                <li className="flex items-center justify-start gap-4">
                  <input
                    type="radio"
                    id="file-review"
                    name="review"
                    className="h-5 w-5 border-2 border-gray bg-transparent text-gray checked:text-yellow focus:ring-2 focus:ring-yellow focus:ring-offset-0"></input>
                  <label
                    htmlFor="file-review"
                    className="text-sm font-medium text-gray">
                    Single file review (e.g. video, image, or PDF)
                  </label>
                </li>
                <li className="flex items-center justify-start gap-4">
                  <input
                    id="link-review"
                    type="radio"
                    name="review"
                    className="h-5 w-5 border-2 border-gray bg-transparent text-gray checked:text-yellow focus:ring-2 focus:ring-yellow focus:ring-offset-0"></input>
                  <label
                    htmlFor="link-review"
                    className="text-sm font-medium text-gray">
                    Single link review (e.g. LinkedIn URL, portfolio)
                  </label>
                </li>
                <li className="flex items-center justify-start gap-4">
                  <input
                    id="multiple-review"
                    type="radio"
                    name="review"
                    className="h-5 w-5 border-2 border-gray bg-transparent text-gray checked:text-yellow focus:ring-2 focus:ring-yellow focus:ring-offset-0"></input>
                  <label
                    htmlFor="multiple-review"
                    className="text-sm font-medium text-gray">
                    Single review of multiple files (e.g. 2 videos and 1 image,
                    reviewed together)
                  </label>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <label
                className="text-center text-sm text-white"
                htmlFor="description">
                Review file type
              </label>
              <ul className="ml-3 flex w-full gap-6">
                <li className="flex items-center justify-start gap-4">
                  <input
                    type="radio"
                    id="video-review"
                    name="review-type"
                    className="h-5 w-5 border-2 border-gray bg-transparent text-gray checked:text-yellow focus:ring-2 focus:ring-yellow focus:ring-offset-0"></input>
                  <label
                    htmlFor="video-review"
                    className="text-sm font-medium text-gray">
                    Video
                  </label>
                </li>
                <li className="flex items-center justify-start gap-4">
                  <input
                    id="image-review"
                    type="radio"
                    name="review-type"
                    className="h-5 w-5 border-2 border-gray bg-transparent text-gray checked:text-yellow focus:ring-2 focus:ring-yellow focus:ring-offset-0"></input>
                  <label
                    htmlFor="image-review"
                    className="text-sm font-medium text-gray">
                    Image
                  </label>
                </li>
                <li className="flex items-center justify-start gap-4">
                  <input
                    id="file-review"
                    type="radio"
                    name="review-type"
                    className="h-5 w-5 border-2 border-gray bg-transparent text-gray checked:text-yellow focus:ring-2 focus:ring-yellow focus:ring-offset-0"></input>
                  <label
                    htmlFor="file-review"
                    className="text-sm font-medium text-gray">
                    File (PDF, .txt, etc.)
                  </label>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <p className="text-xs font-medium text-gray">
                The user will be able to select these options when purchasing
                the package. They will become tags in your dashboard.
              </p>
              <FormInput
                label={"Package instructions (customers will view too)"}
                isLabelled={true}
                placeholder={"Add Instructions"}
                id={"instructions"}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-10">
          <span className="inline-flex h-fit w-full flex-col border-b-2 border-b-yellow pb-2">
            <h4 className="text-center text-sm text-white">
              3. Define its cost and number of reviews
            </h4>
          </span>
          <p className="w-1/2 text-center text-sm font-medium text-gray">
            Users will upload their items for you to review, and they pay your
            review fee.
          </p>
          <div className="flex w-full flex-col gap-8">
            <div className="flex items-center">
              <Listbox value={selectedCurrency} onChange={handleSelectChange}>
                <Label className="w-full flex-auto text-sm text-white">
                  Currency
                </Label>
                <ListboxButton className="relative w-1/4 flex-auto cursor-default rounded-md bg-white/10 p-3 font-medium text-white/80 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0">
                  <span className="flex items-center">
                    <span className="block truncate text-base text-white/80">
                      {selectedCurrency.name}
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
                  anchor="bottom"
                  className="max-h-56 w-[var(--button-width)] overflow-auto rounded-md bg-gray-dark text-base text-white/80 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in">
                  {currencies.map((currency) => (
                    <ListboxOption
                      key={currency.id}
                      value={currency}
                      className="group relative cursor-pointer select-none p-3 text-white/80 data-[focus]:bg-white/10 data-[selected]:bg-white/10 data-[focus]:text-white">
                      <div className="flex items-center justify-between">
                        <span className="group-data-[selected] flex items-center justify-between truncate font-medium group-data-[selected]:text-yellow">
                          {currency.name}
                        </span>
                        <div className="invisible group-data-[selected]:visible group-data-[selected]:text-yellow">
                          <CheckIcon />
                        </div>
                      </div>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <div className="flex w-full items-center justify-between">
              <label className="w-full text-sm text-white" htmlFor="cost">
                Package Cost
              </label>
              <div className="flex w-fit flex-auto items-center justify-end gap-8">
                <p className="text-sm font-medium text-gray">Price</p>
                <input
                  step="0.1"
                  type="number"
                  id="cost"
                  placeholder="$ 100.00"
                  className="w-full rounded-md border-none bg-white/10 p-3 text-base font-medium text-white/80 outline-0 placeholder:text-base placeholder:text-white/50 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0"></input>
              </div>
            </div>
          </div>
          <p className="w-1/2 text-center text-sm font-medium text-gray">
            This package can result in one single review, or it can be a
            specific number of reviews to be consumed as credits.
          </p>
          <div className="flex w-full items-center justify-between">
            <label
              className="w-1/2 text-sm font-medium text-gray"
              htmlFor="credits">
              Number of reviews (credits) in this package View video explanation
            </label>
            <input
              step="0.1"
              type="number"
              id="credits"
              placeholder=""
              className="w-1/5 rounded-md border-none bg-white/10 p-3 text-base font-medium text-white/80 outline-0 placeholder:text-base placeholder:text-white/50 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0"></input>
          </div>
          <p className="w-1/2 text-center text-sm font-medium text-gray">
            Users can see and buy your package when it’s published.
          </p>
          <Button
            type={"submit"}
            label={"Save And Publish Package"}
            background={"bg-yellow"}
            form={"package-info"}
          />
        </div>
      </div>
    </form>
  );
}
