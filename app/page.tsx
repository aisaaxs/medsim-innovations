"use client";

import Image from "next/image";
import Syringe from "../images/pexels-jonathanborba-13697925.jpg";
import AboutUsImg from "../images/pexels-thisisengineering-3913010 (1).jpg";
import ProductsImg from "../images/pexels-shox-28271058.jpg";
import CustomersImg from "../images/pexels-rdne-6129507.jpg";
import ContactUsImg from "../images/Contact Us Image.png";
import { Racing_Sans_One, Oswald } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBox, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const router = useRouter();

  const sections = [
    {
      image: AboutUsImg,
      title: "About Us",
      description: "Learn more about our mission to bring realistic and affordable training solutions that make a difference.",
      buttonText: "Learn More About Us",
      link: "/about-us",
      bgColor: "bg-gray-900",
      reverseOrder: true,
    },
    {
      image: ProductsImg,
      title: "Our Products",
      description: "Discover our range of high-quality, durable products designed to enhance your training experience.",
      buttonText: "View Our Products",
      link: "/our-products",
      bgColor: "bg-white",
      reverseOrder: false,
    },
    {
      image: CustomersImg,
      title: "Our Customers",
      description: "Learn more about who we serve and collaborate with to achieve shared success and drive meaningful impact.",
      buttonText: "Explore Our Customers",
      link: "/about-us#our-customers",
      bgColor: "bg-gray-900",
      reverseOrder: true,
    },
    {
      image: ContactUsImg,
      title: "Contact Us",
      description: "Reach out to our team for any inquiries, support, or assistance with our products and services.",
      buttonText: "Get in Touch With Us",
      link: "/contact-us",
      bgColor: "bg-white",
      reverseOrder: false,
    },
  ];

  const features = [
    {
      icon: faUsers,
      title: "Expert Team",
      text: "Our team comprises seasoned experts to guide you through effective, realistic training solutions.",
      background: "bg-gradient-to-tr from-blue-300 to-green-400"
    },
    {
      icon: faBox,
      title: "Quality Products",
      text: "Offering state-of-the-art products to ensure you receive reliable and durable solutions.",
      background: "bg-gradient-to-tr from-purple-300 to-pink-400"
    },
    {
      icon: faMicrochip,
      title: "Innovative Technology",
      text: "We use advanced simulation technology to help you achieve higher standards in training.",
      background: "bg-gradient-to-tr from-orange-300 to-red-400"
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col">
      <div className="relative w-full h-screen flex-shrink-0">
        <Image 
          src={Syringe}
          alt="Syringe"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        
        <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
        
        <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 ${racing_sans_one.className} uppercase`}>
          <h1 className="lg:text-8xl md:text-7xl text-6xl font-bold leading-tight w-full">
            Every human life deserves a great clinical experience
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 bg-white">
        <h2 className={`text-4xl mb-8 text-gray-900 ${racing_sans_one.className} uppercase`}>Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 max-w-5xl">
          {features.map((feature, index) => (
            <div
                key={index}
                className={`w-72 h-60 bg-white border-2 border-gray-900 shadow-lg rounded-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-md`}
            >
                <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-gray-900 text-5xl mb-4"
                />
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {feature.title}
                </h3>
                <p className="text-center text-gray-900">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full h-auto flex justify-center items-center pt-20 px-6">
          <h3 className={`text-3xl text-gray-900 capitalize ${oswald.className} text-center bg-yellow-300 p-4 rounded-lg`}>
            Hands-on training isn&#39;t just practice—it&#39;s protection. Each simulation brings us closer to safer patient outcomes.
          </h3>
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={`flex flex-col py-12 lg:flex-row items-center justify-center ${section.bgColor}`}>
          {section.reverseOrder ? (
            <>
              <div className="lg:w-1/2 px-8 mb-6 lg:mb-0 order-2 lg:order-1 max-lg:mt-6">
                <h2 className={`text-6xl mb-4 text-white ${racing_sans_one.className}`}>{section.title}</h2>
                <p className="text-white text-lg">{section.description}</p>
                <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded hover:bg-yellow-300" onClick={() => router.push(section.link)}>
                  {section.buttonText}
                </button>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 relative">
                <Image 
                  src={section.image} 
                  alt={section.title} 
                  layout="responsive" 
                  className="lg:rounded-l-xl shadow-xl filter grayscale-[20%] brightness-90 hover:brightness-100 transition duration-300"
                />
              </div>
            </>
          ) : (
            <>
              <div className="lg:w-1/2 relative">
                <Image 
                  src={section.image} 
                  alt={section.title} 
                  layout="responsive" 
                  className="lg:rounded-r-xl shadow-xl filter grayscale-[20%] brightness-90 hover:brightness-100 transition duration-300"
                />
              </div>
              <div className="lg:w-1/2 px-8 max-lg:mt-6">
                <h2 className={`text-6xl mb-4 text-gray-900 ${racing_sans_one.className}`}>{section.title}</h2>
                <p className="text-gray-900 text-lg">{section.description}</p>
                <button className="mt-4 px-6 py-2 bg-gray-900 text-white hover:text-gray-900 rounded hover:bg-yellow-300" onClick={() => router.push(section.link)}>
                  {section.buttonText}
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}