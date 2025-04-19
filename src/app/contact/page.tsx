"use client";

import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";
import Loading from "@/components/loading";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactUsPageImage from "../../../public/contact/main.jpg";
import { Racing_Sans_One, Roboto } from "next/font/google";

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

export default function ContactUs() {
    const { theme } = useTheme();
    const hasMounted = useHasMounted();
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageText, setMessageText] = useState("");
    const [status, setStatus] = useState<"success" | "error" | "loading" | null>(null);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        if (!hasMounted) return;

        const timeout = setTimeout(() => {
        setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [hasMounted]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!name || !email || !messageText) {
          setStatus("error");
          setFeedback("All fields are required.");
          return;
        }
    
        setStatus("loading");
        setFeedback("Sending...");
    
        try {
          const res = await fetch("/api/contact-form/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  name, email, message: messageText }),
          });
    
          const data = await res.json();
    
          if (!res.ok) {
            throw new Error(data.error || "Something went wrong.");
          }
    
          setStatus("success");
          setFeedback("Thank you! Your message has been sent.");
          setName("");
          setEmail("");
          setMessageText("");
        } catch (error) {
          setStatus("error");
          setFeedback("Failed to send. Please try again later.");
        } finally {
          setTimeout(() => {
            setStatus(null);
            setFeedback("");
          }, 4000);
        }
    };    

    if (!hasMounted) return null;

    if (isLoading) {
        return <Loading text="loading" theme={theme} />;
    }

    return (
        <div className={`w-full h-full ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} pb-24`}>
            <div className="relative w-full h-[600px] flex-shrink-0">
                <Image 
                    src={ContactUsPageImage}
                    alt="Contact Us Page Image"
                    layout="fit"
                    objectFit="cover"
                    className="w-full h-full"
                />
                
                <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
                
                <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 ${racing_sans_one.className} uppercase`}>
                    <h1 className="lg:text-10xl md:text-9xl text-8xl font-bold leading-tight w-full capitalize text-center">
                        contact us
                    </h1>
                </div>
            </div>

            <div className="w-full h-auto grid lg:grid-cols-2 max-lg:grid-rows-2">
                <div className="w-full h-full flex justify-center items-center p-12 max-lg:order-2">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.977345743138!2d77.05952517579877!3d28.450099292341225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f3792b8429%3A0x3d9bb96088d10356!2sLane%20Q%2C%20Block%20P%2C%20Block%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%20122022%2C%20India!5e0!3m2!1sen!2sca!4v1730182175581!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: theme === "light" ? "invert(0%)" : "invert(100%)" }}
                        allowFullScreen={false}
                        loading="lazy"
                        title="Google Maps"
                        className="rounded-lg outline-none shadow-lg"
                      ></iframe>
                </div>
                
                <div className="w-full h-full flex justify-center items-center p-12 max-lg:order-1">
                    <form className={`w-full max-w-[600px] h-auto p-8 ${theme === "light" ? "border-black" : "border-white"} border-2 rounded-lg flex flex-col justify-center items-center gap-8 shadow-lg`} onSubmit={handleSubmit}>
                        <h2 className={`text-4xl ${racing_sans_one.className} uppercase text-center`}>
                            Get in Touch
                        </h2>

                        <input type="text" placeholder="Your Name" className={`w-full h-12 border-2 rounded-md ${theme === "light" ? "border-black" : "border-white"} outline-none px-4 ${roboto.className}`} value={name} onChange={(e) => setName(e.target.value)} />

                        <input type="email" placeholder="Your Email" className={`w-full h-12 border-2 rounded-md ${theme === "light" ? "border-black" : "border-white"} outline-none px-4 ${roboto.className}`} value={email} onChange={(e) => setEmail(e.target.value)} />

                        <textarea placeholder="Your Message" className={`w-full h-32 border-2 rounded-md ${theme === "light" ? "border-black" : "border-white"} outline-none px-4 py-2 ${roboto.className}`} value={messageText} onChange={(e) => setMessageText(e.target.value)} />

                        <button type="submit" className={`w-full max-w-96 h-12 rounded-md capitalize ${theme === "light" ? "bg-black hover:bg-black/80 text-white" : "bg-white hover:bg-white/80 text-black"} cursor-pointer ${roboto_italic.className}`}>
                            Send Message
                        </button>

                        {status && (
                            <p
                            className={`text-center text-sm rounded-full px-4 py-2 ${
                                status === "success"
                                ? "bg-green-500 text-white"
                                : status === "error"
                                ? "bg-red-500 text-white"
                                : "bg-blue-500 text-white"
                            }`}
                            >
                                {feedback}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}