"use client";

import { useState } from "react";

import Button from "@/components/Button";
import FormCheckbox from "@/components/Forms/FormCheckbox";
import Section from "@/components/Section";

import { Slider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import useMediaDevices from "@/hooks/useMediaDevices";

export default function PersonalInfo() {
  const { cameras, microphones, speakers } = useMediaDevices();
  const [colors, setColors] = useState([
    "#00FF00",
    "#FF0000",
    "#FFFFFF",
    "#000000",
  ]);
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedMicrophone, setSelectedMicrophone] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState("");

  function handleChange(index, event) {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  }

  return (
    <Section>
      <div className="sticky top-6 flex w-full justify-end gap-4 pr-8">
        <h2 className="flex-1 text-3xl">Review Settings</h2>
        <Button
          label={"Reset Changes"}
          background={"bg-gray"}
          type={"reset"}
          form={"review-info"}
        />
        <Button
          type={"submit"}
          label={"Save Changes"}
          disable={true}
          background={"bg-yellow"}
          form={"review-info"}
        />
      </div>
      <form className="w-full" autoComplete="true" id="review-info">
        <div className="mt-20 flex h-screen w-1/2 flex-col gap-10 overflow-auto">
          <div className="ml-4 flex flex-col items-start justify-center gap-4 font-medium text-gray-light">
            <FormCheckbox id={"Show logo"} defaultChecked={true} />
            <FormCheckbox
              id={"Start with microphone enabled"}
              defaultChecked={true}
            />
            <FormCheckbox
              id={"Start with camera enabled"}
              defaultChecked={true}
            />
            <FormCheckbox id={"Videos loaded start muted"} />
            <FormCheckbox
              id={"Trackpad: pinch to zoom"}
              defaultChecked={true}
            />
            <FormCheckbox id={"Trackpad: reposition with 2-finger swipe"} />
          </div>
          <div className="flex items-center gap-8">
            <label className="font-medium text-gray-light">
              Brush size for tools
            </label>
            <Slider
              slotProps={{
                thumb: {
                  className:
                    "w-5 h-5 flex items-center justify-center bg-yellow rounded-full hover:shadow absolute focus:hover:shadow-[0_0_0_8px_rgba(255,186,3,0.16)]",
                },
                root: {
                  className: "w-28 relative inline-block h-2 cursor-pointer",
                },
                rail: {
                  className:
                    "ring-0 bg-yellow/70 h-1 w-28 rounded-full block absolute",
                },
                track: {
                  className:
                    "border-none bg-yellow outline-0 h-1.5 absolute rounded-full",
                },
                valueLabel: {
                  className: "bg-yellow text-black font-medium",
                },
              }}
              valueLabelDisplay="auto"
              aria-label="custom thumb label"
              defaultValue={3}
              min={1}
              max={7}
            />
          </div>
          <div className="flex w-5/6 flex-col gap-4">
            <label className="font-medium text-gray-light">
              Note color options
            </label>
            <div className="flex w-full gap-4">
              {colors.map((color, index) => (
                <div key={index} className="group relative rounded-md">
                  <label
                    htmlFor={`color${index}`}
                    className="absolute -top-3 left-2 z-10 bg-[#191d1f] px-2 font-medium text-white/50 group-focus-within:text-yellow">
                    {`Color ${index + 1}`}
                  </label>
                  <input
                    id={`color${index}`}
                    placeholder={color}
                    type="text"
                    value={color}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full rounded-md bg-transparent p-4 pe-14 font-medium text-white outline-none placeholder:text-base placeholder:text-white/50 hover:border-gray-light hover:ring-gray-light focus:border-yellow focus:ring-yellow"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    {color && (
                      <span
                        style={{ backgroundColor: color }}
                        className="mr-2 h-5 w-5 rounded-full border border-white/50"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10 flex w-5/6 gap-4">
            <div className="flex w-1/3 flex-col gap-2">
              <Listbox value={selectedCamera} onChange={setSelectedCamera}>
                <Label className="w-full text-sm font-medium text-white">
                  Camera
                </Label>
                <ListboxButton className="group relative w-full cursor-pointer rounded-md border border-[#6b7280] bg-transparent p-4 pe-14 font-medium text-white outline-none placeholder:text-base placeholder:text-white/50 hover:border-gray-light hover:ring-gray-light data-[open]:border-yellow">
                  <span className="flex items-center">
                    <span className="block overflow-hidden truncate text-sm text-white/80">
                      {selectedCamera
                        ? selectedCamera.label
                        : "Select a Camera"}
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
                  className="group/open max-h-56 w-[var(--button-width)] overflow-auto rounded-md bg-gray-dark text-base text-white/80 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in">
                  {cameras.map((camera) => (
                    <ListboxOption
                      key={camera.deviceId}
                      value={camera}
                      className="group relative cursor-pointer select-none p-3 text-white/80 data-[focus]:bg-white/10 data-[selected]:bg-white/10 data-[focus]:text-white">
                      <div className="flex items-center justify-between">
                        <span className="group-data-[selected] flex items-center justify-between overflow-hidden truncate text-sm font-medium group-data-[selected]:text-yellow">
                          {camera.label || `Camera ${camera.deviceId}`}
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
            <div className="flex w-1/3 flex-col gap-2">
              <Listbox
                value={selectedMicrophone}
                onChange={setSelectedMicrophone}>
                <Label className="text-sm font-medium text-white">
                  Microphone
                </Label>
                <ListboxButton className="group relative w-full cursor-pointer rounded-md border border-[#6b7280] bg-transparent p-4 pe-14 font-medium text-white outline-none placeholder:text-base placeholder:text-white/50 hover:border-gray-light hover:ring-gray-light data-[open]:border-yellow">
                  <span className="flex items-center">
                    <span className="block overflow-hidden truncate text-sm text-white/80">
                      {selectedMicrophone
                        ? selectedMicrophone.label
                        : "Select a Microphone"}
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
                  className="group/open max-h-56 w-[var(--button-width)] overflow-auto rounded-md bg-gray-dark text-base text-white/80 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in">
                  {microphones.map((microphone) => (
                    <ListboxOption
                      key={microphone.deviceId}
                      value={microphone}
                      className="group relative cursor-pointer select-none p-3 text-white/80 data-[focus]:bg-white/10 data-[selected]:bg-white/10 data-[focus]:text-white">
                      <div className="flex items-center justify-between">
                        <span className="group-data-[selected] flex items-center justify-between overflow-hidden truncate text-sm font-medium group-data-[selected]:text-yellow">
                          {microphone.label || `Camera ${microphone.deviceId}`}
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
            <div className="flex w-1/3 flex-col gap-2">
              <Listbox value={selectedSpeaker} onChange={setSelectedSpeaker}>
                <Label className="w-full text-sm font-medium text-white">
                  Speaker
                </Label>
                <ListboxButton className="group relative w-full cursor-pointer rounded-md border border-[#6b7280] bg-transparent p-4 pe-14 font-medium text-white outline-none placeholder:text-base placeholder:text-white/50 hover:border-gray-light hover:ring-gray-light data-[open]:border-yellow">
                  <span className="flex items-center">
                    <span className="block overflow-hidden truncate text-sm text-white/80">
                      {selectedSpeaker
                        ? selectedSpeaker.label
                        : "Select a Speaker"}
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
                  className="group/open max-h-56 w-[var(--button-width)] overflow-auto rounded-md bg-gray-dark text-base text-white/80 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in">
                  {speakers.map((speaker) => (
                    <ListboxOption
                      key={speaker.deviceId}
                      value={speaker}
                      className="group relative cursor-pointer select-none p-3 text-white/80 data-[focus]:bg-white/10 data-[selected]:bg-white/10 data-[focus]:text-white">
                      <div className="flex items-center justify-between">
                        <span className="group-data-[selected] flex items-center justify-between overflow-hidden truncate text-sm font-medium group-data-[selected]:text-yellow">
                          {speaker.label || `Camera ${speaker.deviceId}`}
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
          </div>
        </div>
      </form>
    </Section>
  );
}
