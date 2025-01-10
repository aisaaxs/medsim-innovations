import ClientRoot from "@/components/ClientRoot";
import "../globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRoot>
      <main>{children}</main>
    </ClientRoot>
  );
}