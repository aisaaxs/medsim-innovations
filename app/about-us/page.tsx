"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faTools, faCheckCircle, faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Racing_Sans_One, Oswald } from "next/font/google";
import AboutUsImg from "../images/Our Team Photos Anthonyshkraba Production.jpg";
import NursingSchool from "../images/Nursing Students Thirdman.jpg";
import MedicalSchool from "../images/Medical Student Photo by Artempodrez.jpg";
import MedInstitution from "../images/Doctors Photos from Pexels.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
});

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#fff] to-[#f0f8ff] flex flex-col">
      <Header />

      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-tr from-[#009cdb] to-[#00c7e2]">
        <Image
          src={AboutUsImg}
          alt="Our Team"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}>
            About Us
          </h1>
        </div>
      </div>

      <div className="py-16 px-8 bg-white text-center">
        <h2 className={`text-5xl mb-8 text-primaryTextColor ${racing_sans_one.className} uppercase`}>Our Background</h2>
        <p className="max-w-4xl mx-auto text-lg">
          MedSim Innovations is an affordable provider of state-of-the-art medical simulators and training equipment. We specialize in offering simulation technology that helps healthcare professionals enhance their skills and knowledge in a safe, controlled environment. Our products are designed to replicate real-life medical scenarios, ensuring that trainees gain practical experience before they step into actual patient care settings.
        </p>
      </div>

      <div className="py-16 bg-[#b9f1fb] text-center">
        <h2 className={`text-5xl mb-12 text-primaryTextColor ${racing_sans_one.className} uppercase`}>Mission & Vision</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-6 max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2 p-4 bg-yellow-400 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className={`text-2xl mb-4 text-primaryTextColor ${racing_sans_one.className}`}>Mission Statement</h3>
            <p className="text-primaryTextColor">
              To revolutionize healthcare education by providing cutting-edge medical simulation technology that empowers healthcare professionals' clinical competency through simulation solutions for high standards of patient care.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4 bg-green-400 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className={`text-2xl mb-4 text-primaryTextColor ${racing_sans_one.className}`}>Vision Statement</h3>
            <p className="text-primaryTextColor">
              We envision a world where simulation-based education is the cornerstone of healthcare training, ensuring better patient outcomes and advancing the quality of healthcare worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-center">
        <h2 className={`text-5xl mb-12 text-primaryTextColor ${racing_sans_one.className} uppercase`}>Our Value Pillars</h2>
        <div className="flex flex-wrap justify-center gap-12 px-4 max-w-7xl mx-auto">
          {[
            { icon: faLightbulb, title: "Innovation", text: "Continuous investment in research and development to bring the latest technology to the market." },
            { icon: faTools, title: "Customization", text: "Ability to tailor simulation solutions to meet the specific needs of each client." },
            { icon: faCheckCircle, title: "Quality & Realism", text: "High standards in product design, ensuring that simulators offer lifelike experiences." },
            { icon: faUsers, title: "Comprehensive Support", text: "Providing end-to-end service from product selection and installation to ongoing maintenance and training." },
            { icon: faGlobe, title: "Global Reach", text: "A network of distributors and partners that allow us to serve clients worldwide." },
          ].map((pillar, index) => (
            <div
              key={index}
              className="bg-primaryTextColor w-72 h-80 shadow-lg rounded-xl p-8 flex flex-col items-center transform hover:scale-105 transition-all duration-300"
            >
              <FontAwesomeIcon icon={pillar.icon} className="text-white text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{pillar.title}</h3>
              <p className="text-center text-white">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-[#b9f1fb] text-center">
        <h2 className={`text-5xl mb-8 text-primaryTextColor ${racing_sans_one.className} uppercase`}>Our Customers</h2>
        <div className="flex flex-col lg:flex-row justify-around gap-8 px-8 max-w-7xl mx-auto">
        {[
            { title: "Nursing Schools & Colleges", text: "Offering training kits that cater specifically to nursing education and training.", image: NursingSchool },
            { title: "Medical Schools & Universities", text: "Providing tools for medical students and residents to gain hands-on experience.", image: MedicalSchool },
            { title: "Hospitals & Healthcare Institutions", text: "Supporting ongoing professional development and competency assessments for healthcare providers.", image: MedInstitution },
            ].map((customer, index) => (
            <div 
                key={index} 
                className="bg-white w-full lg:w-80 p-6 shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center"
            >
                <Image 
                src={customer.image} 
                alt="Customer Image"
                className="w-full h-[300px] object-cover rounded-md mb-4" 
                />
                <h3 className={`text-xl mb-4 text-primaryTextColor ${racing_sans_one.className}`}>{customer.title}</h3>
                <p className="text-center text-primaryTextColor">{customer.text}</p>
            </div>
            ))}
        </div>
      </div>

      <div className="py-12 bg-primaryTextColor text-white text-center px-6">
        <h2 className={`text-5xl mb-4 ${racing_sans_one.className} uppercase`}>MedSim Innovations</h2>
        <p className={`text-lg max-w-4xl mx-auto ${oswald.className}`}>
          At MedSim Innovations, we are dedicated to transforming the landscape of healthcare training through innovative and affordable solutions. Our goal is to bridge the gap between knowledge and real-world application, empowering healthcare professionals to achieve excellence in patient care.
        </p>
      </div>

      <Footer />
    </div>
  );
}