export default function Button({ ...props }) {
  return (
    <button
      type={props.type}
      form={props.form}
      disabled={props.disabled}
      className={`min-w-40 rounded-3xl ${props.background} px-5 py-3 text-base font-bold uppercase text-gray-dark ${props.disabled ? "disabled:opacity-20" : ""}`}>
      {props.children}
      <span className="flex items-center justify-center gap-2">
        {props.icon ? props.icon : ""} {props.label}
      </span>
    </button>
  );
}
