"use client";

import Image from "next/image";
import { Racing_Sans_One, Oswald } from "next/font/google";
import OurProductsImg from "../images/Medical Products Photo.jpg";
import SutureKitImg from "../images/Medical Products Photo.jpg";
import ROMAImg from "../images/Medical Products Photo.jpg";
import StudentBagImg from "../images/Medical Products Photo.jpg";
import CommunityBagImg from "../images/Medical Products Photo.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
});

export default function ProductsPage() {
  const products = [
    {
      title: "Suture Kit",
      description: "An essential tool for medical and nursing students to practice and refine suturing skills.",
      image: SutureKitImg,
      link: "/products/suture-kit",
    },
    {
      title: "ROMA Kit",
      description: "Routes of Medication Administration (ROMA) kit to simulate real-life scenarios for medication delivery.",
      image: ROMAImg,
      link: "/products/roma-kit",
    },
    {
      title: "Student Bag",
      description: "A durable and practical bag for nursing students to carry essential items for academic and clinical use.",
      image: StudentBagImg,
      link: "/products/student-bag",
    },
    {
      title: "Community Bag",
      description: "Designed for versatility and reliability, ideal for professionals working in community healthcare.",
      image: CommunityBagImg,
      link: "/products/community-bag",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <Image
          src={OurProductsImg}
          alt="Our Products"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}>
            Our Products
          </h1>
        </div>
      </div>

      <div className="py-16 px-8 bg-gray-100 text-center">
        <h2 className={`text-5xl mb-20 text-gray-900 ${racing_sans_one.className} uppercase`}>
          We Create Tools to Shape Tomorrow's Caregivers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-2xl font-semibold mb-4 text-gray-900 ${oswald.className}`}>
                  {product.title}
                </h3>
                <p className={`text-lg text-gray-700 ${oswald.className}`}>{product.description}</p>
                <button
                  onClick={() => window.location.href = product.link}
                  className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}