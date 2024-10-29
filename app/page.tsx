"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Syringe from "./images/Home Syringe.png";
import AboutUsImg from "./images/Our Team Photos Anthonyshkraba Production.jpg";
import ProductsImg from "./images/Medical Products Photo.jpg";
import BlogsImg from "./images/Blogs Photos Suzy Hazelwood.jpg";
import ContactUsImg from "./images/Contact Us Photo 887751.jpg";
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
      buttonText: "Learn More",
      link: "/about-us",
      bgColor: "bg-[#b9f1fb]",
      reverseOrder: true,
    },
    {
      image: ProductsImg,
      title: "Our Products",
      description: "Discover our range of high-quality, durable products designed to enhance your training experience.",
      buttonText: "View Products",
      link: "/our-products",
      bgColor: "bg-white",
      reverseOrder: false,
    },
    {
      image: BlogsImg,
      title: "Blogs",
      description: "Read our latest blogs to stay updated on industry trends, tips, and training innovations.",
      buttonText: "Read Blogs",
      link: "/blogs",
      bgColor: "bg-[#b9f1fb]",
      reverseOrder: true,
    },
    {
      image: ContactUsImg,
      title: "Contact Us",
      description: "Reach out to our team for any inquiries, support, or assistance with our products and services.",
      buttonText: "Get in Touch",
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
    },
    {
      icon: faBox,
      title: "Quality Products",
      text: "Offering state-of-the-art products to ensure you receive reliable and durable solutions.",
    },
    {
      icon: faMicrochip,
      title: "Innovative Technology",
      text: "We use advanced simulation technology to help you achieve higher standards in training.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#b9f1fb] to-[#e1f3f8] flex flex-col">
      <Header />

      <div className="relative w-full lg:h-[80vh] md:h-[60vh] h-[40vh] flex-shrink-0">
        <Image 
          src={Syringe}
          alt="Syringe"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className={`absolute top-1/2 left-0 right-0 bg-gradient-to-r from-[rgba(27,37,47,0.7)] via-[rgba(0,0,0,0.05)] to-transparent transform -translate-y-1/2 flex flex-col justify-center items-start text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl gap-y-6 px-6 py-8 ${racing_sans_one.className} uppercase`}>
          <h1 className="text-left"><span className="text-red-500">realistic</span> training</h1>
          <h1 className="text-left"><span className="text-red-500">affordable</span> solutions</h1>
          <h1 className="text-left"><span className="text-red-500">better</span> care</h1>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 bg-white">
        <h2 className={`text-4xl mb-8 text-primaryTextColor ${racing_sans_one.className} uppercase`}>Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 max-w-5xl">
          {features.map((feature, index) => (
            <div key={index} className="bg-white w-72 h-60 shadow-md border-2 border-primaryTextColor rounded-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <FontAwesomeIcon icon={feature.icon} className="text-primaryTextColor text-5xl mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full h-auto flex justify-center items-center pt-28 px-6">
          <h3 className={`text-3xl text-primaryTextColor capitalize ${oswald.className} text-center`}>
            Hands-on training isn&#39;t just practice—it&#39;s protection. Each simulation brings us closer to safer patient outcomes.
          </h3>
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={`flex flex-col py-12 lg:flex-row items-center justify-center ${section.bgColor}`}>
          {section.reverseOrder ? (
            <>
              <div className="lg:w-1/2 px-8 mb-6 lg:mb-0 order-2 lg:order-1 max-lg:mt-6">
                <h2 className={`text-6xl mb-4 text-gray-700 ${racing_sans_one.className}`}>{section.title}</h2>
                <p className="text-gray-600 text-lg">{section.description}</p>
                <button className="mt-4 px-6 py-2 bg-primaryTextColor text-white rounded" onClick={() => router.push(section.link)}>
                  {section.buttonText}
                </button>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <Image src={section.image} alt={section.title} layout="responsive" className="lg:rounded-l-xl shadow-xl" />
              </div>
            </>
          ) : (
            <>
              <div className="lg:w-1/2">
                <Image src={section.image} alt={section.title} layout="responsive" className="lg:rounded-r-xl shadow-xl" />
              </div>
              <div className="lg:w-1/2 px-8 max-lg:mt-6">
                <h2 className={`text-6xl mb-4 text-gray-700 ${racing_sans_one.className}`}>{section.title}</h2>
                <p className="text-gray-600 text-lg">{section.description}</p>
                <button className="mt-4 px-6 py-2 bg-primaryTextColor text-white rounded" onClick={() => router.push(section.link)}>
                  {section.buttonText}
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      <Footer />
    </div>
  );
}
