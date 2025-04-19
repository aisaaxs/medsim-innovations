"use client";

import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";
import { useEffect, useState, useRef } from "react";
import Loading from "@/components/loading";
import Image from "next/image";
import AboutUsPageImage from "../../../public/about/main.png";
import { Racing_Sans_One, Roboto } from "next/font/google";
import usersIcon from '../../../public/icons/users-solid.svg';
import lightbulbIcon from '../../../public/icons/lightbulb-solid.svg';
import globeIcon from '../../../public/icons/globe-solid.svg';
import toolsIcon from '../../../public/icons/screwdriver-wrench-solid.svg';
import circleCheckIcon from '../../../public/icons/circle-check-solid.svg';
import hospitalsImage from '../../../public/about/our-customers/hospitals.jpg';
import medicalCollegesImage from '../../../public/about/our-customers/medical-colleges.jpg';
import nursingCollegesImage from '../../../public/about/our-customers/nursing-colleges.jpg';

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const roboto_italic = Roboto({
  weight: '800',
  style: 'italic',
  subsets: ['latin'],
});

const valuePillars = [
    { icon: lightbulbIcon, title: "Innovation", text: "Continuous investment in research and development to bring the latest technology to the market.", BGColor: "bg-orange-500", border: "border-orange-500" },
    { icon: toolsIcon, title: "Customization", text: "Ability to tailor simulation solutions to meet the specific needs of each client.", BGColor: "bg-blue-500", border: "border-blue-500" },
    { icon: circleCheckIcon, title: "Quality & Realism", text: "High standards in product design, ensuring that simulators offer lifelike experiences.", BGColor: "bg-red-500", border: "border-red-500" },
    { icon: usersIcon, title: "Support", text: "Providing end-to-end service from product selection and installation to ongoing maintenance and training.", BGColor: "bg-purple-500", border: "border-purple-500" },
    { icon: globeIcon, title: "Global Reach", text: "A network of distributors and partners that allow us to serve clients worldwide.", BGColor: "bg-emerald-500", border: "border-emerald-500" },
];

const customers = [
    { title: "Nursing Colleges", text: "Offering training kits specifically designed for nursing education and practical training.", image: nursingCollegesImage },
    { title: "Medical Colleges", text: "Providing advanced tools for medical students and residents to enhance their hands-on learning experience.", image: medicalCollegesImage },
    { title: "Hospitals", text: "Supporting ongoing professional development and competency assessments for healthcare providers.", image: hospitalsImage },
];

export default function AboutUs() {
  const { theme } = useTheme();
  const hasMounted = useHasMounted();
  const [isLoading, setIsLoading] = useState(true);
  const customerSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMounted) return;

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted || isLoading) return;
  
    const hash = window.location.hash;
  
    if (hash === "#our-customers" && customerSectionRef.current) {
      customerSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hasMounted, isLoading]);

  if (!hasMounted) return null;

  if (isLoading) {
    return <Loading text="loading" theme={theme} />;
  }

  return (
    <div className={`w-full h-full text-4xl ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex flex-col`}>
        <div className="relative w-full h-[600px] flex-shrink-0">
            <Image 
                src={AboutUsPageImage}
                alt="About Us Page Image"
                layout="fit"
                objectFit="cover"
                className="w-full h-full brightness-125"
            />
            
            <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
            
            <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 ${racing_sans_one.className} uppercase`}>
                <h1 className="lg:text-8xl md:text-7xl text-6xl font-bold leading-tight w-full capitalize text-center">
                    about us
                </h1>
            </div>
        </div>

        <div className="w-full h-auto p-12 py-24 flex flex-col justify-center items-center gap-16">
            <h2 className={`md:text-6xl sm:text-5xl max-sm:text-4xl ${racing_sans_one.className} uppercase text-center`}>our background</h2>

            <p className={`max-w-6xl mx-auto text-lg text-center ${roboto.className}`}>
                At MedSim Innovations, we are committed to enhancing patient safety and improving medical education through affordable, state-of-the-art simulation technology. Our advanced medical simulators and training equipment allow healthcare professionals to develop their skills in a safe, controlled environment, reducing the risk of real-world errors.
            </p>

            <div className={`w-auto h-auto py-6 px-8 flex justify-center items-center flex-col gap-y-8 rounded-lg max-w-6xl border-4 ${theme === "light" ? "border-black" : "border-white"}`}>
                <h2 className={`text-2xl text-center uppercase ${roboto_italic.className}`}>Why Simulation-Based Training?
                </h2>
                
                <p className={`mx-auto text-lg text-center ${roboto.className}`}>
                    Medical errors, particularly in nursing, are a significant concern in healthcare systems worldwide. According to the <span className="italic">World Health Organization (WHO)</span>, <a href="https://www.who.int/news-room/fact-sheets/detail/patient-safety" className={`${theme === "light" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"} underline`} target="__blank">patient safety incidents rank among the leading causes of death and disability</a>. Many of these errors stem from insufficient training, miscommunication, or procedural mistakes—all of which can be minimized through hands-on, simulation-based learning.
                </p>

                <p className={`mx-auto text-lg text-center ${roboto.className}`}>
                    At <span className="font-bold">MedSim Innovations Pvt. Ltd.</span>, we recognize the urgent need for high-quality, affordable training solutions, especially for nursing colleges and small hospitals in developing countries. By providing cost-effective medical simulators and training materials, we help bridge the gap between theoretical knowledge and practical expertise, ultimately improving patient care outcomes.
                </p>
            </div>

            <div className="w-full max-w-6xl h-auto py-6 px-8 rounded-lg flex justify-center items-center flex-col gap-y-6 bg-gradient-to-br from-red-300 via-cyan-200 to-red-300 shadow-md shadow-black text-black">
                <h3 className={`text-2xl text-center ${roboto_italic.className} uppercase`}>value-added services</h3>
                
                <p className={`mx-auto text-lg text-center ${roboto.className}`}>
                    Beyond offering cutting-edge simulation technology, we assist healthcare institutions in designing and setting up affordable simulation labs that meet rigorous educational and compliance standards. Our expertise ensures that medical educators can create realistic, high-impact learning environments without exceeding budget constraints.
                </p>

                <p className={`mx-auto text-lg text-center ${roboto.className}`}>
                    If you&apos;re interested in building a simulation lab that transforms the way your students are trained, <a href="https://www.medsiminnovations.com/contact" className={`${theme === "light" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"} underline font-bold`}>contact us</a> for a detailed discussion—we’re here to help you make a difference.
                </p>
            </div>
        </div>

        <div className={`w-full min-h-96 ${theme === "light" ? "bg-black text-white" : "bg-white text-black"} flex flex-col p-12 py-24 gap-20`}>
            <h2 className={`md:text-6xl sm:text-5xl max-sm:text-4xl ${racing_sans_one.className} uppercase text-center`}>vision & mission</h2>

            <div className="w-full h-full grid md:grid-cols-2 max-md:grid-rows-2">
                <div className="w-full h-full p-4">
                    <div className="w-full h-full p-8 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-lg flex flex-col gap-8 justify-start items-center text-black shadow-lg">
                        <h3 className={`text-3xl text-center capitalize ${roboto_italic.className}`}>Vision Statement</h3>
                        
                        <p className={`${roboto.className} text-lg text-center`}>
                            We envision a world where simulation-based education is the cornerstone of healthcare training, ensuring better patient outcomes and advancing the quality of healthcare worldwide.
                        </p>
                    </div>
                </div>

                <div className="w-full h-full p-4">
                    <div className="w-full h-full p-8 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-lg flex flex-col gap-8 justify-start items-center text-black shadow-lg">
                        <h3 className={`text-3xl text-center capitalize ${roboto_italic.className}`}>mission Statement</h3>
                        
                        <p className={`${roboto.className} text-lg text-center`}>
                            To revolutionize healthcare education by providing cutting-edge medical simulation technology that empowers healthcare professionals&#39; clinical competency through simulation solutions for high standards of patient care.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={`w-full min-h-96 flex flex-col p-12 py-24 gap-20`}>
            <h2 className={`md:text-6xl sm:text-5xl max-sm:text-4xl ${racing_sans_one.className} uppercase text-center`}>our value pillars</h2>

            <div className="w-full h-full flex flex-row gap-8 flex-wrap justify-center items-center">
                {
                    valuePillars.map((pillar, index) => (
                        <div key={index} className={`w-auto max-w-[400px] min-h-52 border-4 ${pillar.border} rounded-lg grid grid-cols-[100px_auto] hover:scale-105 transition-transform duration-200`}>
                            <div className={`w-full h-full flex justify-center items-center p-8 ${pillar.BGColor}`}>
                                <Image
                                    src={pillar.icon}
                                    alt={pillar.title}
                                    className={`w-20 h-20 ${theme === "light" ? "invert-100" : "invert-0"}`}
                                />
                            </div>

                            <div className="w-full h-full flex flex-col justify-start items-start p-4 gap-4">
                                <h4 className={`${roboto_italic.className} text-xl`}>{pillar.title}</h4>

                                <p className={`${roboto.className} text-lg`}>{pillar.text}</p>
                            </div>  
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="w-full min-h-96 bg-cyan-200 flex flex-col p-12 py-24 pb-20 gap-20" id="our-customers" ref={customerSectionRef}>
            <h2 className={`md:text-6xl sm:text-5xl max-sm:text-4xl text-black ${racing_sans_one.className} uppercase text-center`}>our customers</h2>

            <div className="w-full h-full flex flex-row gap-20 justify-center items-center flex-wrap">
                {customers.map((customer, index) => (
                    <div key={index} className={`w-80 h-[450px] ${theme === "light" ? "bg-white" : "bg-black"} shadow-lg rounded-lg grid grid-rows-[70%_auto] p-4 hover:scale-105 transition-all duration-200`}>
                        <div className="w-full h-full">
                            <Image src={customer.image} alt={customer.title} className="w-full h-full object-cover rounded-t-lg" />
                        </div>

                        <div className="w-full h-full flex flex-col justify-start items-center gap-2 p-4">
                            <h3 className={`text-2xl ${roboto_italic.className} text-center`}>{customer.title}</h3>
                            
                            <p className={`text-sm ${roboto.className} text-center`}>
                                {customer.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}