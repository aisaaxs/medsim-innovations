"use client";

import "../../globals.css";
import Footer from "../../../components/Footer";
import ClientRoot from "../../../components/ClientRoot";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRoot>
      <main className="w-full min-h-screen">
        {children}
      </main>
      <Footer />
    </ClientRoot>
  );
}