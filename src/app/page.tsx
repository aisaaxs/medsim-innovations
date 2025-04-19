"use client";

import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import Image from "next/image";
import HomePageImage from "../../public/home/main.jpg";
import { Racing_Sans_One, Roboto } from "next/font/google";
import usersIcon from '../../public/icons/users-solid.svg';
import boxesIcon from '../../public/icons/boxes-stacked-solid.svg';
import microchipIcon from '../../public/icons/microchip-solid.svg';
import AboutUsImg from "../../public/home/about-us.png";
import ProductsImg from "../../public/products/main.jpg";
import CustomersImg from "../../public/home/our-customers.jpg";
import ContactUsImg from "../../public/home/contact-us.png";
import Link from "next/link";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: '600',
  subsets: ['latin'],
});

const roboto_italic = Roboto({
  weight: '800',
  style: 'italic',
  subsets: ['latin'],
});

const whyMedSimFeatures = [
  {
    icon: usersIcon,
    title: "Expert Team",
    text: "Our team comprises seasoned experts to guide you through effective, realistic training solutions.",
  },
  {
    icon: boxesIcon,
    title: "Quality Products",
    text: "Offering state-of-the-art products to ensure you receive reliable and durable solutions.",
  },
  {
    icon: microchipIcon,
    title: "Innovative Technology",
    text: "We use advanced simulation technology to help you achieve higher standards in training.",
  },
];


const sections = [
  {
    image: AboutUsImg,
    title: "About Us",
    description: "Learn more about our mission to bring realistic and affordable training solutions that make a difference.",
    buttonText: "Learn More About Us",
    link: "/about",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-950",
    reverseOrder: true,
  },
  {
    image: ProductsImg,
    title: "Our Products",
    description: "Discover our range of high-quality, durable products designed to enhance your training experience.",
    buttonText: "View Our Products",
    link: "/products",
    bgColor: "bg-gradient-to-bl from-rose-500 to-rose-950",
    reverseOrder: false,
  },
  {
    image: CustomersImg,
    title: "Our Customers",
    description: "Learn more about who we serve and collaborate with to achieve shared success and drive meaningful impact.",
    buttonText: "Explore Our Customers",
    link: "/about#our-customers",
    bgColor: "bg-gradient-to-br from-green-500 to-green-950",
    reverseOrder: true,
  },
  {
    image: ContactUsImg,
    title: "Contact Us",
    description: "Reach out to our team for any inquiries, support, or assistance with our products and services.",
    buttonText: "Get in Touch With Us",
    link: "/contact",
    bgColor: "bg-gradient-to-bl from-amber-500 to-amber-950",
    reverseOrder: false,
  },
];

export default function Home() {
  const { theme } = useTheme();
  const hasMounted = useHasMounted();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!hasMounted) return;

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [hasMounted]);

  if (!hasMounted) return null;

  if (isLoading) {
    return <Loading text="loading" theme={theme} />;
  }

  return (
    <div className={`w-full h-full text-4xl ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex flex-col`}>
      <div className="relative w-full h-[600px] flex-shrink-0">
        <Image 
          src={HomePageImage}
          alt="Home Page Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        
        <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
        
        <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 ${racing_sans_one.className} uppercase`}>
          <h1 className="lg:text-8xl md:text-7xl text-6xl font-bold leading-tight w-full capitalize text-center">
            Every human life deserves a great clinical experience
          </h1>
        </div>
      </div>

      <div className="w-full h-auto p-12 flex flex-col justify-center items-center gap-12">
        <h2 className={`md:text-6xl sm:text-5xl max-sm:text-4xl ${racing_sans_one.className} uppercase text-center`}>Why Choose Us</h2>

        <div className="w-full h-auto flex flex-row justify-center items-center gap-8 flex-wrap">
          {
            whyMedSimFeatures.map((feature, index) => (
              <div key={index} className={`w-full max-w-96 min-h-80 h-auto p-8 flex flex-col justify-start items-center text-center border-2 rounded-lg hover:scale-105 transition-all duration-200 gap-4`}>
                <Image src={feature.icon} alt="Icon" className={`w-16 h-16 ${theme === "light" ? "invert-0" : "invert-100"}`} />
                
                <h3 className={`text-2xl mb-4 ${roboto.className} font-bold`}>{feature.title}</h3>
                
                <p className="text-lg">{feature.text}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full h-auto p-12 flex justify-center items-center">
          <div className="w-full h-full bg-yellow-300 rounded-lg flex justify-center items-center p-8">
            <p className={`text-3xl text-gray-900 capitalize ${roboto_italic.className} text-center bg-yellow-300 rounded-lg`}>
              Hands-on training isn&#39;t just practice—it&#39;s protection. Each simulation brings us closer to safer patient outcomes.
            </p>
          </div>
      </div>

      <div className="w-full h-auto mt-16 flex flex-col">
          {
            sections.map((section, index) => {
              return (
                <div key={index} className={`w-full h-auto ${section.bgColor}`}>
                  {
                    section.reverseOrder ? (
                      <div className="w-full h-full flex lg:flex-row max-lg:flex-col-reverse justify-end items-center">
                        <div className="w-full lg:w-1/2 h-full flex flex-col justify-start items-start gap-8 p-12">
                          <h3 className={`${racing_sans_one.className} text-5xl md:text-6xl text-white`}>
                            {section.title}
                          </h3>
                  
                          <p className={`text-lg md:text-xl text-white ${roboto.className}`}>
                            {section.description}
                          </p>
                  
                          <Link
                            href={section.link}
                            className={`bg-white py-3 px-6 rounded-md ${roboto.className} text-base md:text-lg capitalize hover:bg-amber-300 text-black`}
                          >
                            {section.buttonText}
                          </Link>
                        </div>
                  
                        <div className="w-full lg:w-1/2 h-full lg:py-12">
                          <Image
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-fit max-h-96"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex lg:flex-row max-lg:flex-col justify-start items-center">
                        <div className="w-full lg:w-1/2 h-full lg:py-12">
                          <Image
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-fit max-h-96"
                          />
                        </div>
                  
                        <div className="w-full lg:w-1/2 h-full flex flex-col justify-start items-start gap-8 p-12">
                          <h3 className={`${racing_sans_one.className} text-5xl md:text-6xl text-white`}>
                            {section.title}
                          </h3>
                  
                          <p className={`text-lg md:text-xl text-white ${roboto.className}`}>
                            {section.description}
                          </p>
                  
                          <Link
                            href={section.link}
                            className={`bg-white py-3 px-6 rounded-md ${roboto.className} text-base md:text-lg capitalize hover:bg-amber-300 text-black`}
                          >
                            {section.buttonText}
                          </Link>
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            })
          }
      </div>
    </div>
  );
}