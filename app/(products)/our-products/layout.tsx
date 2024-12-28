"use client";

import "../../globals.css";
import Footer from "../../../components/Footer";
import ClientRoot from "../../../components/ClientRoot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <ClientRoot>
      <main className="w-full min-h-screen">
        <div className="border-2 border-gray-900 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer absolute top-10 md:left-6 left-4 hover:bg-gray-900 z-50 hover:text-white group transition-all duration-300" onClick={() => {router.push('/our-products')}}>
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:text-white text-gray-900 transition-all duration-300" />
        </div>
        {children}
      </main>
      <Footer />
    </ClientRoot>
  );
}