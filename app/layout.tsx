import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientRoot from "../components/ClientRoot";

export const metadata: Metadata = {
  title: "MedSim Innovations",
  description: "An affordable provider of state-of-the-art medical simulators and training equipment.",
  applicationName: "MedSim Innovations",
  authors: [{ name: "MedSim Innovations", url: "https://www.medsiminnovations.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientRoot>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientRoot>
      </body>
    </html>
  );
}