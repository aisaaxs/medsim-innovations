import "../globals.css";
import ClientRoot from "../../components/ClientRoot";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRoot>
      <main className="w-screen h-screen">{children}</main>
    </ClientRoot>
  );
}