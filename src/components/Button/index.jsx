export default function Button({ icon, label }) {
  return (
    <button className="rounded-3xl bg-yellow px-4 py-4 text-base uppercase">
      <span className="flex items-center justify-center gap-2">
        {icon ? icon : ""} {label}
      </span>
    </button>
  );
}
