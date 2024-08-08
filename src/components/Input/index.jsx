export default function Input({ icon, ...props }) {
  return (
    <>
      <label className="sr-only" htmlFor={props.id}></label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-4">
          {icon ? icon : null}
        </div>
        <input
          id={props.id}
          placeholder={props.placeholder}
          type="text"
          className="w-full rounded-md bg-transparent p-4 pe-14 font-medium text-white outline-none placeholder:text-lg placeholder:text-white/50 hover:border-gray-light hover:ring-gray-light focus:border-yellow focus:ring-yellow"
        />
      </div>
    </>
  );
}
