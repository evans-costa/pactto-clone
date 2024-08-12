import { Listbox, ListboxButton, ListboxOptions } from "@headlessui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FormDropdown({ children, value, onChange }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white/10 p-3 font-medium text-white/80 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0">
          <span className="flex items-center">
            <span
              className={`${value ? "text-white/80" : "text-white/50"} block truncate text-base`}>
              {value ? value.name : "Country"}
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
          className="mt-1 max-h-56 w-full overflow-auto rounded-md bg-white/10 text-base text-white/80 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in">
          {children}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
