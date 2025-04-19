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
import { useState } from "react";

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
    const [email, setEmail] = useState<string>("");
    const [status, setStatus] = useState<"success" | "error" | "loading" | null>(null);
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if (!email) {
          setStatus("error");
          setMessage("Please enter your email!");
          return;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setStatus("error");
          setMessage("Invalid email format");
          return;
        }
      
        try {
            setStatus("loading");
            setMessage("Checking subscription...");
            
            const checkRes = await fetch(`/api/newsletter-subscription/get?email=${encodeURIComponent(email)}`);
        
            if (!checkRes.ok) throw new Error("Failed to check subscription.");
        
            const exists = await checkRes.json();
        
            if (exists) {
                setStatus("success");
                setMessage("You're already subscribed!");
                return;
            }
            
            setStatus("loading");
            setMessage("Subscribing...");
            const res = await fetch("/api/newsletter-subscription/create", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
        
            const data = await res.json();
        
            if (!res.ok) {
                setStatus("error");
                setMessage(data.error || "Something went wrong!");
            } else {
                setStatus("success");
                setMessage("Thank you for subscribing!");
                setEmail("");
            }
        } catch (error) {
          console.error("Request failed:", error);
          setStatus("error");
          setMessage("Something went wrong. Please try again later.");
        }
    };          

    if (!hasMounted) return null;

    return (
        <div className={`w-full h-auto ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex flex-col px-8 border-t-2`}>
            <div className="w-full h-full grid lg:grid-cols-3 max-lg:grid-rows">
                <div className="w-full min-h-60 flex flex-col justify-center items-center pt-8">
                    <div className="w-full h-auto flex flex-row justify-center items-center pb-4 max-lg:visible lg:hidden">
                        <Image src={MedSimInnovationsLogo} alt="MedSimInnovations Logo" className="w-16 h-16" />
                    </div>
                    <div className="w-full h-auto flex flex-row gap-4 lg:justify-start max-lg:justify-center items-center">
                        <Image src={MedSimInnovationsLogo} alt="MedSim Innovations Logo" className="w-12 h-12 max-lg:hidden lg:visible" />

                        <h1 className={`${audiowide.className} text-3xl sm:text-left max-sm:text-center`}>
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

                    <form className="w-full h-auto flex flex-col justify-center items-center gap-2 my-auto" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email Address" className={`w-full max-w-96 h-12 border-1 rounded-md ${theme === "light" ? "border-black" : "border-white"} outline-none px-4`} value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit" className={`w-full max-w-96 h-12 rounded-md ${roboto.className} capitalize ${theme === "light" ? "bg-black hover:bg-black/80 text-white" : "bg-white hover:bg-white/80 text-black"} cursor-pointer`}>
                            subscribe
                        </button>
                    </form>

                    {status && (
                        <p
                            className={`${roboto.className} capitalize px-4 py-2 rounded-full text-center text-white transition-all duration-200 ${
                            status === "success"
                                ? "bg-green-500"
                                : status === "error"
                                ? "bg-red-500"
                                : "bg-blue-500 animate-pulse"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </div>
            </div>

            <hr className={`w-full border-1 rounded-full ${theme === "light" ? "border-black" : "border-white"}`} />

            <div className="w-full h-auto flex md:flex-row max-md:flex-col justify-between items-center gap-2 py-8">
                <div className="w-auto h-full flex justify-center items-center">
                    <p className={`${roboto.className} ${theme === "light" ? "text-black" : "text-white"} text-center`}>
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