export default function FormInput({ label, isLabelled, type, ...props }) {
  return (
    <>
      {label && (
        <label
          className={`${isLabelled ? "text-center text-sm text-white" : "sr-only"}`}
          htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        id={props.id}
        placeholder={props.placeholder}
        type={type ? type : "text"}
        className="w-full rounded-md border-none bg-white/10 p-3 text-base font-medium text-white/80 outline-0 placeholder:text-base placeholder:text-white/50 hover:bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-0"
      />
    </>
  );
}
