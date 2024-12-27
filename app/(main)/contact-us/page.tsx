"use client";

import { Racing_Sans_One, Oswald } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import ContactUsImg from "../../../images/pexels-alex-andrews-271121-821754.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("formType", "query");
    formDataToSend.append("Name", formData.name);
    formDataToSend.append("Email", formData.email);
    formDataToSend.append("Message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwP30-wbN5awpwOSBgExwroXGzdjzcLjn4m_fXuDIvknqnROYr_MMmNPcj7tn-xuzz_PQ/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.text();

      if (result === "success") {
        setStatus("We have received your message. You can expect a response from us in 2-3 business days!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error: ", error);
      setStatus("Failed to submit the form. Please try again later.");
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <Image
          src={ContactUsImg}
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1
            className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row gap-12">
        <div className="flex-1 bg-gray-50 border-2 border-gray-900 p-6 rounded-xl shadow-lg">
          <h2
            className={`text-4xl mb-6 ${racing_sans_one.className} text-gray-900`}
          >
            Get in Touch
          </h2>
          <p className="text-gray-900 mb-8">
            If you have any questions or need assistance, reach out to us using the information below or through our contact form.
          </p>
          <div className="mb-6 flex flex-col gap-y-2">
            <h3 className={`text-2xl ${oswald.className} text-gray-900`}>
              Address
            </h3>
            <p className="text-gray-900">
              Q 114, 3rd Floor, South City 1, Gurgaon 122001, Haryana, India
            </p>
          </div>
          <div className="mb-6 flex flex-col gap-y-2">
            <h3 className={`text-2xl ${oswald.className} text-gray-900`}>
              Phone
            </h3>
            <p className="text-gray-900">+91 9971466122 | +91 1243699618</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className={`text-2xl ${oswald.className} text-gray-900`}>
              Email
            </h3>
            <p className="text-gray-900 flex flex-col gap-y-2">
              <a href="mailto:sales@medsiminnovations.com" className="text-gray-900 underline">
                sales@medsiminnovations.com
              </a>

              <a href="mailto:rebecca@medsiminnovations.com" className="text-gray-900 underline">
                rebecca@medsiminnovations.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 border-2 border-gray-900 p-6 rounded-xl shadow-lg">
          <h2
            className={`text-4xl mb-6 ${racing_sans_one.className} text-gray-900`}
          >
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-gray-900 text-center font-medium">{status}</p>
          )}
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h2
          className={`text-4xl mb-6 ${racing_sans_one.className} text-gray-900 text-center`}
        >
          Our Location
        </h2>
        <div className="w-full h-72 overflow-hidden rounded-lg shadow-lg">
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
    </div>
  );
}