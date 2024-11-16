"use client";

import Image from "next/image";
import Logo from "../images/Med Sim Logo.png";
import { Oswald, Goldman } from 'next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const oswald = Oswald({
    weight: '500',
    subsets: ['latin'],
});

const goldman = Goldman({
    weight: '400',
    subsets: ['latin'],
});

const navItems = [
    { label: 'home', href: '/' },
    { label: 'about us', href: '/about-us' },
    { label: 'our products', href: '/our-products' },
    { label: 'blogs', href: '/blogs' },
    { label: 'contact us', href: '/contact-us' },
];

export default function Header() {
    const router = useRouter();
    const pathname = usePathname(); // Get the current pathname
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        if (showSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showSidebar]);

    return (
        <div className="w-full h-[80px] flex flex-row justify-between items-center px-6 py-2 fixed top-0 left-0 bg-gray-900 bg-opacity-70 z-20">
            <div className="flex flex-row items-center cursor-pointer" onClick={() => { router.push('/') }}>
                <Image 
                    src={Logo}
                    width={50}
                    height={50}
                    alt="MedSim Innovations Logo"
                />

                <h1 className={`ml-2 text-3xl ${goldman.className} text-white`}>
                    MedSim Innovations
                </h1>
            </div>

            <div className={`hidden lg:flex gap-x-6 ${oswald.className} text-md uppercase text-white items-center`}>
                {navItems.map((item, index) => (
                    <div key={index} className="group cursor-pointer flex flex-col items-center" onClick={() => { router.push(item.href) }}>
                        <p>{item.label}</p>
                        <hr className={`w-full h-1 transform group-hover:scale-x-100 transition-transform duration-300 ${item.href === pathname ? 'scale-x-100 border-yellow-400 bg-yellow-400' : 'scale-x-0 border-white bg-white'}`} />
                    </div>
                ))}
            </div>

            <div className="lg:hidden flex justify-center items-center">
                <FontAwesomeIcon icon={faBars} className="text-white text-2xl cursor-pointer" onClick={() => {
                    setShowSidebar(true);
                }} />
            </div>

            <div className={`lg:hidden fixed top-0 right-0 min-w-[250px] h-full bg-white flex flex-col justify-start items-center drop-shadow-xl z-20 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className={`w-full h-auto flex flex-row justify-between items-center text-primaryTextColor text-xl ${goldman.className} capitalize p-4`}>
                    <h3>menu</h3>
                    <FontAwesomeIcon icon={faX} className="cursor-pointer" onClick={() => setShowSidebar(false)} />
                </div>

                <hr className="w-[95%] border-slate-500" />

                <div className={`flex flex-col gap-y-2 py-4 justify-start items-start w-full ${showSidebar ? "text-primaryTextColor" : "text-white"} ${oswald.className} text-lg capitalize`}>
                    {navItems.map((item, index) => (
                        <p key={index} className={`cursor-pointer hover:bg-slate-200 w-full p-4 ${item.href === pathname ? 'bg-yellow-400' : 'bg-white'}`} onClick={() => {
                            setShowSidebar(false);
                            router.push(item.href);
                        }}>{item.label}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}