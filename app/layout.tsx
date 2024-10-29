import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedSim Innovations",
  description: "An affordable provider of state-of-the-art medical simulators and training equipment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}