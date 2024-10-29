"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Racing_Sans_One, Oswald } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import ContactUsImg from "../images/Contact Us Photo 887751.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
});

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#b9f1fb] to-[#e1f3f8] flex flex-col">
      <Header />

      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-tr from-[#009cdb] to-[#00c7e2]">
        <Image
          src={ContactUsImg}
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row gap-12">
        <div className="flex-1 bg-white p-6 rounded-xl shadow-xl">
          <h2 className={`text-3xl mb-6 ${racing_sans_one.className} text-primaryTextColor`}>Get in Touch</h2>
          <p className="text-primaryTextColor mb-4">If you have any questions, feel free to reach out to us using the information below or through our contact form.</p>
          <div className="mb-6 flex flex-col gap-y-2">
            <h3 className={`text-xl ${oswald.className}`}>Phone</h3>
            <p className="text-primaryTextColor">+1 234 567 890</p>
          </div>
          <div className="mb-6 flex flex-col gap-y-2">
            <h3 className={`text-xl ${oswald.className}`}>Email</h3>
            <p className="text-primaryTextColor">info@example.com</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className={`text-xl ${oswald.className}`}>Location</h3>
            <p className="text-primaryTextColor">Q 114 3rd Floor, Gurgaon Kty., Gurgaon, Gurgaon Kty., Haryana, India, 122001</p>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-xl shadow-xl">
          <h2 className={`text-3xl mb-6 ${racing_sans_one.className} text-primaryTextColor`}>Contact Form</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-primaryTextColor mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-primaryTextColor mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-primaryTextColor mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="bg-primaryTextColor text-white px-4 py-2 rounded mt-4">Send Message</button>
          </form>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h2 className={`text-3xl mb-6 ${racing_sans_one.className} text-primaryTextColor text-center`}>Our Location</h2>
        <div className="w-full h-72 overflow-hidden rounded-lg shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.977345743138!2d77.05952517579877!3d28.450099292341225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f3792b8429%3A0x3d9bb96088d10356!2sLane%20Q%2C%20Block%20P%2C%20Block%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%20122022%2C%20India!5e0!3m2!1sen!2sca!4v1730182175581!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}