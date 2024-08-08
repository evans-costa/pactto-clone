export default function Button({ background, ...props }) {
  return (
    <button
      type={props.type}
      form={props.form}
      className={`rounded-3xl bg-${background} px-6 py-4 text-base uppercase`}>
      <span className="flex items-center justify-center gap-2">
        {props.icon ? props.icon : ""} {props.label}
      </span>
    </button>
  );
}
