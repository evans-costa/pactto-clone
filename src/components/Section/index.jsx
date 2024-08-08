export default function Section({ children }) {
  return (
    <section className="flex h-screen max-h-screen w-auto flex-col items-start overflow-hidden">
      {children}
    </section>
  );
}
