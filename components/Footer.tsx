"use client";

import { Oswald } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

const oswald = Oswald({
    weight: '500',
    subsets: ['latin'],
});

const socialLinks = [
    { icon: faFacebookF, link: "#", color: "text-blue-500" },
    { icon: faInstagram, link: "#", color: "text-pink-500" },
    { icon: faLinkedinIn, link: "#", color: "text-cyan-500" },
    { icon: faYoutube, link: "#", color: "text-red-500" },
    { icon: faTiktok, link: "#", color: "text-indigo-500" },
];

const aboutLinks = [
    { label: "Mission & Vision", link: "#" },
    { label: "Core Values", link: "#" },
    { label: "Our Clients", link: "#" },
    { label: "Product Line", link: "#" },
    { label: "Insights & Blog", link: "#" },
];

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [status, setStatus] = useState<string | null>(null); // Status for success or error
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true

        const { name, email } = formData;

        const formDataToSend = new FormData();
        formDataToSend.append('formType', 'subscribe');
        formDataToSend.append('Name', name);
        formDataToSend.append('Email', email);

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwP30-wbN5awpwOSBgExwroXGzdjzcLjn4m_fXuDIvknqnROYr_MMmNPcj7tn-xuzz_PQ/exec', {
                method: 'POST',
                body: formDataToSend
            });

            const result = await response.text();

            if (result === 'success') {
                setStatus('Thank you for subscribing!');
                setFormData({ name: "", email: "" }); // Clear the input fields
            } else {
                setStatus('Something went wrong, please try again.');
            }
        } catch (error) {
            setStatus('Failed to submit, please try again later.');
        } finally {
            setIsLoading(false); // Set loading state to false when done

            // Clear the status message after 3 seconds
            setTimeout(() => {
                setStatus(null);
            }, 3000); // Clears the message after 3 seconds
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <footer className="w-full bg-gray-900 text-white py-8">
            <div className="px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="gap-y-4 flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-white">MedSim Innovations</h3>
                    <p className="text-sm leading-relaxed text-center">
                        Q 114, 3rd Floor, South City 1,<br /> Gurgaon 122001, Haryana, India
                    </p>
                    <p className="text-sm">
                        <strong className="text-white">Phone:</strong>{" "}
                        <a href="tel:+919971466122" className="hover:text-white underline">+919971466122</a> | <a href="tel:+911243699618" className="hover:text-white underline">+911243699618</a>
                    </p>
                    <p className="text-sm">
                        <strong className="text-white">Email:</strong>{" "}
                        <a href="mailto:sales@medsiminnovations.com" className="hover:text-white underline">sales@medsiminnovations.com</a>
                    </p>
                    <div className="flex gap-x-8 mt-12">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.link} className="transition-all duration-300">
                                <FontAwesomeIcon icon={social.icon} size="2xl" className={`${social.color}`} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">About Us</h3>
                    <ul className="text-sm space-y-3 text-center">
                        {aboutLinks.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className="hover:text-green-500">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Stay in Touch</h3>
                    <p className="text-sm text-center mb-6 leading-relaxed">
                        Subscribe to get the latest updates from MedSim Innovations on products, industry news, and events. You can unsubscribe at any time.
                    </p>
                    <form className="flex flex-col items-center w-full space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full md:w-4/5 p-3 bg-white rounded text-sm focus:outline-none text-gray-900"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full md:w-4/5 p-3 bg-white rounded text-sm focus:outline-none text-gray-900"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full md:w-4/5 px-5 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
                            disabled={isLoading} // Disable button while loading
                        >
                            {isLoading ? "Submitting..." : "Sign Up"}
                        </button>
                    </form>
                    {status && <p className="mt-4 text-white">{status}</p>}
                </div>
            </div>

            <div className="my-12"></div>

            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-sm gap-y-4 gap-x-8 text-center lg:text-left">
                <p className={`lg:mb-0 ${oswald.className}`}>
                    &copy; 2024 <Link href="https://www.medsiminnovations.com" className="text-white underline hover:text-green-500" target="_blank">MedSim Innovations</Link> - All Rights Reserved.
                </p>
                <div className="flex space-x-4">
                    <Link href="/" className="hover:text-green-500 transition-colors duration-200">Privacy Policy</Link>
                    <Link href="/" className="hover:text-green-500 transition-colors duration-200">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}