"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Syringe from "./images/Home Syringe.png";
import { Oswald, Racing_Sans_One } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBox, faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const oswald = Oswald({
  weight: '500',
  subsets: ['latin'],
});

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#0fa4af] to-[#afdde5] flex flex-col">
      <Header />

      <div className="relative w-full h-full">
        <Image 
          src={Syringe}
          alt="Syringe"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        <div className={`absolute top-1/2 left-0 right-0 bg-gradient-to-r from-[rgba(27,37,47,0.7)] via-[rgba(0,0,0,0.05)] to-transparent transform -translate-y-1/2 flex flex-col justify-center items-start text-center text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl gap-y-6 px-6 py-8 ${racing_sans_one.className} uppercase`}>
          <h1 className="text-left"><span className="text-red-500">realistic</span> training</h1>
          <h1 className="text-left"><span className="text-red-500">affordable</span> solutions</h1>
          <h1 className="text-left"><span className="text-red-500">better</span> care</h1>
        </div>
      </div>

      <div className="bg-white w-full lg:h-2/5 md:h-3/5 sm:h-4/5 h-full flex flex-wrap justify-evenly items-center p-4">
        <div className="relative flex flex-col items-center w-1/2 md:w-1/4 lg:w-1/5 p-4 group">
            <div className="transition-transform duration-700 ease-in-out transform  group-hover:scale-0">
              <FontAwesomeIcon icon={faUsers} className="text-primaryTextColor text-8xl" />
            </div>
            <span className="absolute bottom-0 transform translate-y-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center">
              <button className={`bg-primaryTextColor text-white py-2 px-4 rounded capitalize max-w-44 ${oswald.className}`} onClick={() => {router.push('/about-us')}}>
                our mission, vision, and values
              </button>
            </span>
        </div>

        <div className="relative flex flex-col items-center w-1/2 md:w-1/4 lg:w-1/5 p-4 group">
            <div className="transition-transform duration-700 ease-in-out transform  group-hover:scale-0">
              <FontAwesomeIcon icon={faBox} className="text-primaryTextColor text-8xl" />
            </div>
            <span className="absolute bottom-0 transform translate-y-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center">
              <button className={`bg-primaryTextColor text-white py-2 px-4 rounded capitalize max-w-44 ${oswald.className}`} onClick={() => {router.push('/our-products')}}>
                check out our latest products
              </button>
            </span>
        </div>

        <div className="relative flex flex-col items-center w-1/2 md:w-1/4 lg:w-1/5 p-4 group">
            <div className="transition-transform duration-700 ease-in-out transform  group-hover:scale-0">
              <FontAwesomeIcon icon={faBlog} className="text-primaryTextColor text-8xl" />
            </div>
            <span className="absolute bottom-0 transform translate-y-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center">
              <button className={`bg-primaryTextColor text-white py-2 px-4 rounded capitalize max-w-44 ${oswald.className}`} onClick={() => {router.push('/blogs')}}>
                Discover advanced simulation tech
              </button>
            </span>
        </div>

        <div className="relative flex flex-col items-center w-1/2 md:w-1/4 lg:w-1/5 p-4 group">
            <div className="transition-transform duration-700 ease-in-out transform  group-hover:scale-0">
              <FontAwesomeIcon icon={faEnvelope} className="text-primaryTextColor text-8xl" />
            </div>
            <span className="absolute bottom-0 transform translate-y-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-center">
              <button className={`bg-primaryTextColor text-white py-2 px-4 rounded capitalize max-w-44 ${oswald.className}`} onClick={() => {router.push('/contact-us')}}>
                contact us for more information
              </button>
            </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}