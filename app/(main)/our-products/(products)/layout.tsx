import "../../../globals.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-white pt-20">
        <main>
          {children}
        </main>
    </div>
  );
}