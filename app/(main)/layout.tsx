import "../globals.css";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import ClientRoot from "../../components/ClientRoot";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientRoot>
      <Header />
      <main>{children}</main>
      <Footer />
    </ClientRoot>
  );
}