import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "MedSim Innovations",
  description: "Author: Anitej Isaac Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className="antialiased flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}