"use client";

import Image from "next/image";
import { Racing_Sans_One, Oswald } from "next/font/google";
import OurProductsImg from "../../../images/pexels-shox-28271058.jpg";
import NurseKitProImg from "../../../images/nurse-kit-pro.png";
import CommunityBagImg from "../../../images/community-bag.png";
import SutureKitImg from "../../../images/suture-kit.png";
import RomaKitImg from "../../../images/roma-kit.png";

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
      title: "ROMA Kit",
      description: "Routes of Medication Administration (ROMA) kit to simulate real-life scenarios for medication delivery.",
      image: RomaKitImg,
      link: "/our-products/roma-kit",
      backgroundColor: "bg-green-200",
    },
    {
      title: "Nurse Kit Pro",
      description: "A durable and practical kit for nursing students to carry essential items for academic and clinical use.",
      image: NurseKitProImg,
      link: "/our-products/nurse-kit-pro",
      backgroundColor: "bg-cyan-200",
    },
    {
      title: "Suture Kit",
      description: "An essential tool for medical and nursing students to practice and refine suturing skills.",
      image: SutureKitImg,
      link: "/our-products/suture-kit",
      backgroundColor: "bg-red-200",
    },
    {
      title: "Community Bag",
      description: "Designed for versatility and reliability, ideal for professionals working in community healthcare.",
      image: CommunityBagImg,
      link: "/our-products/community-bag",
      backgroundColor: "bg-yellow-200",
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
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}>
            Our Products
          </h1>
        </div>
      </div>

      <div className="py-16 px-8 bg-gray-100 text-center" id="our-products">
        <h2 className={`text-5xl mb-20 text-gray-900 ${racing_sans_one.className} uppercase`}>
          We Create Tools to Shape Tomorrow&apos;s Caregivers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300`}
            >
              <div className={`${product.backgroundColor} px-12`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-fill"
                />
              </div>
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