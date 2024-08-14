import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <main className="flex w-full overflow-hidden">
      <nav className="mr-10 h-full w-fit flex-none">
        <Sidebar />
      </nav>
      <div className="w-full">{children}</div>
    </main>
  );
}
