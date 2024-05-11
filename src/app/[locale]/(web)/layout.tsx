import { Sidebar } from "@/components/sidebar";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main className="relative max-w-full ml-60 max-md:ml-0 max-md:mt-12">{children}</main>
    </div>
  );
}