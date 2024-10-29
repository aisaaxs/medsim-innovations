"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../images/Medical Products Photo.jpg";
import image2 from "../images/Medical Student Photo by Artempodrez.jpg";
import image3 from "../images/Our Team Photos Anthonyshkraba Production.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Racing_Sans_One, Roboto } from "next/font/google";

interface ImageData {
  src: StaticImageData;
  title: string;
  description: string;
}

const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
});

const racing_sans_one = Racing_Sans_One({
    weight: '400',
    subsets: ['latin'],
});

const images: ImageData[] = [
  { src: image1, title: "Suture Kit", description: "A suture kit designed for training purposes is an essential tool for medical students, nursing students, and healthcare professionals learning or refining their suturing skills. The features of an ideal training suture kit should prioritize realism, variety, and durability to provide a comprehensive learning experience." },
  { src: image2, title: "ROMA Kit", description: "A Routes of Medication Administration (ROMA) kit is designed to help healthcare students and professionals learn and practice administering medications through various routes. The kit includes tools and resources that simulate real-life scenarios and provide a comprehensive learning experience." },
  { src: image3, title: "Student Bag", description: "The student’s bag caters to the demanding needs of nursing students, offering practicality, comfort, and durability while ensuring that they can carry everything they need for their academic and clinical responsibilities." },
  { src: image1, title: "Community Bag", description: "These bags are typically robust, organized, and adaptable to various environments and needs." },
  { src: image2, title: "Students Uniform", description: "The uniform designed to meet the specific needs of nursing students who are often on their feet for long hours, performing a range of tasks." },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative mx-auto pt-10 w-full">
      <div
        className="relative mx-12 h-[460px] overflow-hidden rounded-xl group shadow-lg"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          className="object-cover rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
        <div className="absolute bottom-0 left-0 w-full bg-primaryTextColor bg-opacity-70 px-4 py-2">
          <h2 className={`text-white text-4xl font-semibold text-center uppercase ${racing_sans_one.className}`}>{images[currentIndex].title}</h2>
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-opacity-75 bg-black text-white hover:bg-opacity-100 transition"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-opacity-75 bg-black text-white hover:bg-opacity-100 transition"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div key={index} className={`h-2 w-8 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}></div>
        ))}
      </div>

      <div className="w-[94%] m-auto h-auto min-h-[200px] mt-6 p-8 bg-primaryTextColor rounded-xl text-center shadow-md flex justify-center items-center">
        <p className={`text-white text-xl ${roboto.className}`}>{images[currentIndex].description}</p>
      </div>
    </div>
  );
}