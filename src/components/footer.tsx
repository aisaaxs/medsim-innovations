"use client";

import Image from "next/image";
import MedSimInnovationsLogo from "../../public/logo.png";
import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";
import { Roboto, Audiowide } from "next/font/google";
import Link from "next/link";
import instagramIcon from "../../public/icons/square-instagram-brands.svg";
import facebookIcon from "../../public/icons/square-facebook-brands.svg";
import twitterIcon from "../../public/icons/square-x-twitter-brands.svg";
import youtubeIcon from "../../public/icons/square-youtube-brands.svg";

const roboto = Roboto({
    weight: '600',
    subsets: ['latin'],
});

const roboto_italic = Roboto({
    weight: '400',
    subsets: ['latin'],
    style: 'italic',
});

const audiowide = Audiowide({
    weight: '400',
    subsets: ['latin'],
});

export default function Footer() {
    const { theme } = useTheme();
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return (
        <div className={`w-full h-auto ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex flex-col px-8`}>
            <div className="w-full h-full grid lg:grid-cols-3 max-lg:grid-rows">
                <div className="w-full min-h-60 flex flex-col justify-center items-center pt-8">
                    <div className="w-full h-auto flex flex-row gap-4 lg:justify-start max-lg:justify-center items-center">
                        <Image src={MedSimInnovationsLogo} alt="MedSim Innovations Logo" className="w-12 h-12" />

                        <h1 className={`${audiowide.className} text-3xl`}>
                            MedSim Innovations
                        </h1>
                    </div>

                    <div className="w-full h-full flex flex-col justify-center lg:items-start max-lg:items-center gap-4 px-16 py-8">
                        <p className={`text-sm ${roboto_italic.className} lg:text-left max-lg:text-center capitalize`}>
                            <span className={`${roboto.className}`}>Address: </span><Link href="https://maps.app.goo.gl/UHpLZRVzxLeGxD616" target="__blank" className= {`${theme === "light" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"}`}>Q 114, 3rd Floor, South City 1, Gurgaon 122001, Haryana, India</Link>
                        </p>

                        <p className={`text-sm ${roboto_italic.className} lg:text-left max-lg:text-center capitalize`}>
                            <span className={`${roboto.className}`}>Email: </span><Link href="mailto:sales@medsiminnovations.com" target="__blank" className= {`${theme === "light" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"}`}>sales@medsiminnovations.com</Link>
                        </p>

                        <p className={`text-sm ${roboto_italic.className} lg:text-left max-lg:text-center capitalize`}>
                            <span className={`${roboto.className}`}>Phone: </span><Link href="tel:+919971466122" target="__blank" className= {`${theme === "light" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"}`}>+919971466122</Link>
                        </p>
                    </div>
                </div>

                <div className="w-full min-h-60 flex flex-col justify-center items-center gap-4 p-8">
                    <h4 className={`${roboto.className} text-2xl capitalize text-center`}>
                        follow us on social media
                    </h4>

                    <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
                        <Link href="#"><Image src={instagramIcon} alt="Instagram Icon" className={`w-16 h-16 hover:scale-110 transition-all duration-200 ${theme === "light" ? "invert-0" : "invert-100"}`} /></Link>

                        <Link href="#"><Image src={facebookIcon} alt="Facebook Icon" className={`w-16 h-16 hover:scale-110 transition-all duration-200 ${theme === "light" ? "invert-0" : "invert-100"}`} /></Link>

                        <Link href="#"><Image src={twitterIcon} alt="Twitter Icon" className={`w-16 h-16 hover:scale-110 transition-all duration-200 ${theme === "light" ? "invert-0" : "invert-100"}`} /></Link>

                        <Link href="#"><Image src={youtubeIcon} alt="YouTube Icon" className={`w-16 h-16 hover:scale-110 transition-all duration-200 ${theme === "light" ? "invert-0" : "invert-100"}`} /></Link>
                    </div>
                </div>

                <div className="w-full min-h-60 flex flex-col justify-center items-center gap-4 p-8">
                    <h4 className={`${roboto.className} text-2xl capitalize text-center`}>
                        subscribe to our newsletter
                    </h4>

                    <form className="w-full h-auto flex flex-col justify-center items-center gap-2 my-auto">
                        <input type="email" placeholder="Email Address" className={`w-full max-w-96 h-12 border-1 rounded-md ${theme === "light" ? "border-black" : "border-white"} outline-none px-4`} />

                        <button type="submit" className={`w-full max-w-96 h-12 rounded-md ${roboto.className} capitalize ${theme === "light" ? "bg-black hover:bg-black/80 text-white" : "bg-white hover:bg-white/80 text-black"} cursor-pointer`}>
                            subscribe
                        </button>
                    </form>

                    <p className={`${roboto.className} capitalize bg-green-400 px-2 rounded-full text-center hidden`}>thank you for subscribing!</p>

                    <p className={`${roboto.className} capitalize bg-red-400 px-2 rounded-full text-center hidden`}>oops! something went wrong. try again later.</p>
                </div>
            </div>

            <hr className={`w-full border-1 rounded-full ${theme === "light" ? "border-black" : "border-white"}`} />

            <div className="w-full h-auto flex md:flex-row max-md:flex-col justify-between items-center gap-2 py-8">
                <div className="w-auto h-full flex justify-center items-center">
                    <p className={`${roboto.className} ${theme === "light" ? "text-black" : "text-white"}`}>
                        &copy; 2024 <Link href="https://www.medsiminnovations.com" target="__blank" className={`underline ${theme === "light" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"}`}>MedSim Innovations</Link> - All Rights Reserved.
                    </p>
                </div>

                <div className="w-auto h-full flex sm:flex-row max-sm:flex-col justify-center items-center sm:gap-8 max-sm:gap-2">
                    <Link href="https://www.medsiminnovations.com" target="__blank" className={`${theme === "light" ? "hover:bg-black hover:text-white text-black" : "hover:bg-white hover:text-black text-white"} capitalize ${roboto.className}`}>privacy policy</Link>

                    <Link href="https://www.medsiminnovations.com" target="__blank" className={`${theme === "light" ? "hover:bg-black hover:text-white text-black" : "hover:bg-white hover:text-black text-white"} capitalize ${roboto.className}`}>terms of service</Link>
                </div>
            </div>
        </div>
    )
}