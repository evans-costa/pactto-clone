export default function FormCheckbox({ id, defaultChecked }) {
  return (
    <div className="flex items-center gap-5">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        id={id}
        className="inset-0 z-20 h-5 w-5 cursor-pointer rounded border-2 border-gray bg-transparent text-yellow focus:ring-yellow"></input>
      <label htmlFor={id} className="cursor-pointer">
        {id}
      </label>
    </div>
  );
}
