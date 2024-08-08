export default function FormInput({ id, placeholder, type }) {
  return (
    <>
      <label className="sr-only" htmlFor={id}></label>
      <input
        id={id}
        placeholder={placeholder}
        type={type ? type : "text"}
        className="w-full rounded-md border-none bg-white/10 p-3 text-lg font-medium text-white/80 outline-0 placeholder:text-lg placeholder:text-white/50 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0"
      />
    </>
  );
}
