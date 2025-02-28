"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faTools, faCheckCircle, faGlobe, faUsers, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Racing_Sans_One } from "next/font/google";
import AboutUsImg from "../../../images/The Three E.png";
import NursingSchool from "../../../images/Nusing-Colleges.jpg";
import MedicalSchool from "../../../images/Medical Student Photo by Artempodrez.jpg";
import MedInstitution from "../../../images/Doctors Photos from Pexels.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <Image
          src={AboutUsImg}
          alt="Our Team"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-7xl sm:text-8xl md:text-9xl`}>
            About Us
          </h1>
        </div>
      </div>

      <div className="w-full h-auto py-16 px-8 flex justify-center items-center flex-col gap-y-16">
        <div className="w-full h-full max-w-6xl flex justify-center items-center flex-col gap-y-8">
          <h2 className={`text-5xl text-gray-900 text-center ${racing_sans_one.className} uppercase`}>Our Background</h2>
          
          <p className="max-w-6xl mx-auto text-lg text-center">
            At MedSim Innovations, we are committed to enhancing patient safety and improving medical education through affordable, state-of-the-art simulation technology. Our advanced medical simulators and training equipment allow healthcare professionals to develop their skills in a safe, controlled environment, reducing the risk of real-world errors.
          </p>
        </div>

        <div className="w-auto h-auto py-6 px-8 flex justify-center items-center flex-col gap-y-8 rounded-lg max-w-6xl border-4 border-black">
          <h2 className={`text-2xl text-gray-900 text-center font-sans font-extrabold uppercase`}>Why Simulation-Based Training?
          </h2>
          
          <p className="mx-auto text-lg text-center">
            Medical errors, particularly in nursing, are a significant concern in healthcare systems worldwide. According to the <span className="italic">World Health Organization (WHO)</span>, <a href="https://www.who.int/news-room/fact-sheets/detail/patient-safety" className="underline hover:bg-gray-900 hover:text-white" target="__blank">patient safety incidents rank among the leading causes of death and disability <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm"/></a>. Many of these errors stem from insufficient training, miscommunication, or procedural mistakes—all of which can be minimized through hands-on, simulation-based learning.
          </p>

          <p className="mx-auto text-lg text-center">
            At <span className="font-bold">MedSim Innovations Pvt. Ltd.</span>, we recognize the urgent need for high-quality, affordable training solutions, especially for nursing colleges and small hospitals in developing countries. By providing cost-effective medical simulators and training materials, we help bridge the gap between theoretical knowledge and practical expertise, ultimately improving patient care outcomes.
          </p>
        </div>

        <div className="w-full max-w-6xl h-auto py-6 px-8 rounded-lg flex justify-center items-center flex-col gap-y-6 bg-gradient-to-br from-emerald-200 via-cyan-100 to-amber-200 shadow-md shadow-black">
          <h3 className={`text-2xl text-gray-900 text-center font-sans font-extrabold uppercase`}>value-added services</h3>
          
          <p className="text-gray-950 text-lg text-center">
            Beyond offering cutting-edge simulation technology, we assist healthcare institutions in designing and setting up affordable simulation labs that meet rigorous educational and compliance standards. Our expertise ensures that medical educators can create realistic, high-impact learning environments without exceeding budget constraints.
          </p>

          <p className="text-gray-950 text-lg text-center">
            If you’re interested in building a simulation lab that transforms the way your students are trained, <a href="https://www.medsiminnovations.com/contact-us" className="underline font-bold hover:bg-gray-900 hover:text-white">contact us</a> for a detailed discussion—we’re here to help you make a difference.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-900 text-center" id="vision-mission">
        <h2 className={`text-5xl mb-12 text-white ${racing_sans_one.className} uppercase`}>Vision & Mission</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-6 max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2 p-4 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-lg shadow-lg hover:shadow-lg py-8 transition-shadow duration-300">
            <h3 className={`text-3xl mb-4 text-gray-900 font-extrabold`}>Vision Statement</h3>
            <p className="text-gray-900">
              We envision a world where simulation-based education is the cornerstone of healthcare training, ensuring better patient outcomes and advancing the quality of healthcare worldwide.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 py-8">
            <h3 className={`text-3xl mb-4 text-gray-900 font-extrabold`}>Mission Statement</h3>
            <p className="text-gray-900">
              To revolutionize healthcare education by providing cutting-edge medical simulation technology that empowers healthcare professionals&#39; clinical competency through simulation solutions for high standards of patient care.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-center" id="value-pillars">
        <h2 className={`text-5xl mb-12 text-gray-900 ${racing_sans_one.className} uppercase`}>Our Value Pillars</h2>
        <div className="flex flex-wrap justify-center gap-12 px-4 max-w-7xl mx-auto">
          {[
            { icon: faLightbulb, title: "Innovation", text: "Continuous investment in research and development to bring the latest technology to the market.", textColor: "text-orange-500", border: "border-2 border-orange-500" },
            { icon: faTools, title: "Customization", text: "Ability to tailor simulation solutions to meet the specific needs of each client.", textColor: "text-blue-500", border: "border-2 border-blue-500" },
            { icon: faCheckCircle, title: "Quality & Realism", text: "High standards in product design, ensuring that simulators offer lifelike experiences.", textColor: "text-red-500", border: "border-2 border-red-500" },
            { icon: faUsers, title: "Comprehensive Support", text: "Providing end-to-end service from product selection and installation to ongoing maintenance and training.", textColor: "text-purple-500", border: "border-2 border-purple-500" },
            { icon: faGlobe, title: "Global Reach", text: "A network of distributors and partners that allow us to serve clients worldwide.", textColor: "text-emerald-500", border: "border-2 border-emerald-500" },
          ].map((pillar, index) => (
            <div
              key={index}
              className={`bg-white w-72 h-72 shadow-lg rounded-xl p-8 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 ${pillar.border}`}
            >
              <FontAwesomeIcon icon={pillar.icon} className={`text-5xl ${pillar.textColor} mb-4`} />
              <h3 className={`text-xl font-semibold mb-2 text-gray-900`}>{pillar.title}</h3>
              <p className={`text-center text-gray-900`}>{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-[#b9f1fb] text-center" id="our-customers">
        <h2 className={`text-5xl mb-8 text-gray-900 ${racing_sans_one.className} uppercase`}>Our Customers</h2>
        <div className="flex flex-col lg:flex-row justify-around gap-8 px-8 max-w-7xl mx-auto">
        {[
            { title: "Nursing Colleges", text: "Offering training kits specifically designed for nursing education and practical training.", image: NursingSchool },
            { title: "Medical Colleges", text: "Providing advanced tools for medical students and residents to enhance their hands-on learning experience.", image: MedicalSchool },
            { title: "Hospitals", text: "Supporting ongoing professional development and competency assessments for healthcare providers.", image: MedInstitution },
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
                <h3 className={`text-2xl mb-4 text-gray-900 ${racing_sans_one.className}`}>{customer.title}</h3>
                <p className="text-center text-gray-900">{customer.text}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}