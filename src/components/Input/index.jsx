import SearchIcon from "@mui/icons-material/Search";

export default function Input() {
  return (
    <>
      <label className="sr-only" htmlFor="search"></label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-4">
          <SearchIcon className="h-7 w-7 text-white" />
        </div>
        <input
          id="search"
          placeholder="Search"
          type="text"
          className="w-full rounded-md bg-transparent p-4 pe-14 font-medium text-white outline-none hover:border-gray-light hover:ring-gray-light focus:border-yellow focus:ring-yellow"
        />
      </div>
    </>
  );
}
