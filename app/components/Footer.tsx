import { Oswald } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const oswald = Oswald({
    weight: '500',
    subsets: ['latin'],
});

const socialLinks = [
    { icon: faFacebookF, link: "#" },
    { icon: faInstagram, link: "#" },
    { icon: faLinkedinIn, link: "#" },
    { icon: faYoutube, link: "#" },
    { icon: faTiktok, link: "#" },
];

const aboutLinks = [
    { label: "Mission & Vision", link: "#" },
    { label: "Core Values", link: "#" },
    { label: "Our Clients", link: "#" },
    { label: "Product Line", link: "#" },
    { label: "Insights & Blog", link: "#" },
];

export default function Footer() {
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
                    <div className="flex gap-x-8 mt-6">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.link} className="hover:text-green-500 transition-all duration-300">
                                <FontAwesomeIcon icon={social.icon} size="2xl" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">About Us</h3>
                    <ul className="text-sm space-y-3 text-center">
                        {aboutLinks.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className="hover:text-white">
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
                    <form className="flex flex-col items-center w-full space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-4/5 p-3 bg-white rounded text-sm focus:outline-none text-gray-900"
                        />
                        <button
                            type="submit"
                            className="w-full md:w-4/5 px-5 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            <div className="my-8 border-t border-gray-700"></div>

            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-sm gap-y-4 gap-x-8 text-center lg:text-left">
                <p className={`lg:mb-0 ${oswald.className}`}>
                    &copy; 2024 <Link href="https://www.medsiminnovations.com" className="text-white underline" target="_blank">MedSim Innovations</Link> - All Rights Reserved.
                </p>
                <div className="flex space-x-4">
                    <Link href="/" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                    <Link href="/" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
