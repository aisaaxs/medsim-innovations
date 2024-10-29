"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ImageSlider from '../components/ImageSlider';
import { Racing_Sans_One } from "next/font/google";
import OurProductsImg from "../images/Medical Products Photo.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#fff] to-[#f0f8ff] flex flex-col">
      <Header />

      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-tr from-[#009cdb] to-[#00c7e2]">
        <Image
          src={OurProductsImg}
          alt="Our Team"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}>
            Our Products
          </h1>
        </div>
      </div>

      <div className="w-full h-[auto] flex justify-start items-center">
        <ImageSlider />
      </div>

      <Footer />
    </div>
  );
}