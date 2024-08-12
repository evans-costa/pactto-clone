export default function Button({ ...props }) {
  return (
    <button
      type={props.type}
      form={props.form}
      disabled={props.disabled}
      className={`rounded-3xl ${props.background} px-5 py-3 text-base uppercase ${props.disabled ? "disabled:opacity-20" : ""}`}>
      <span className="flex items-center justify-center gap-2">
        {props.icon ? props.icon : ""} {props.label}
      </span>
    </button>
  );
}
