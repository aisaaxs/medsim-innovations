"use client";

import "../../globals.css";
import { usePathname } from "next/navigation";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className={`w-full h-full ${pathname === "/our-products" ? "pt-0" : "pt-20"}`}>
        {children}
    </main>
  );
}