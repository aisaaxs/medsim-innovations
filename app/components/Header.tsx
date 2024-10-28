"use client";

import Image from "next/image";
import Logo from "../images/Med Sim Logo.png";
import { Oswald, Goldman } from 'next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
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

    const [showSidebar, setShowSidebar] = useState(false);
    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    useEffect(() => {
        setShowSidebar(false);
        setCurrentPage(window.location.pathname);
    }, [window.location.pathname]);

    return (
        <div className="w-full h-[60px] flex flex-row justify-start items-center px-3 py-2 fixed top-0 left-0 bg-gradient-to-r from-[#b9f1fb] to-[#e1f3f8] z-20">
            <div className="flex flex-row h-full w-auto">
                <Image 
                    src={Logo}
                    width={50}
                    height={50}
                    alt="MedSim Innovations Logo"
                />

                <div className={`w-auto h-full flex flex-row items-center justify-start px-2 text-4xl max-sm:text-3xl ${goldman.className} text-primaryTextColor`}>
                    <h1>MedSim Innovations</h1>
                </div>
            </div>

            <div className={`w-auto h-full flex flex-row gap-x-6 ml-auto ${oswald.className} text-md uppercase text-primaryTextColor justify-start items-center pr-4 max-lg:hidden`}>
                {navItems.map((item, index) => (
                    <div key={index} className="group cursor-pointer flex flex-col items-center" onClick={() => { router.push(item.href) }}>
                        <p>{item.label}</p>
                        <hr className={`w-full h-1 border-primaryTextColor bg-primaryTextColor transform group-hover:scale-x-100 transition-transform duration-300 ${item.href === currentPage ? 'scale-x-100' : 'scale-x-0'}`} />
                    </div>
                ))}

                <FontAwesomeIcon icon={faSearch} className="text-primaryTextColor w-5 h-5 cursor-pointer" />
            </div>

            <div className="lg:hidden ml-auto flex justify-center items-center">
                <FontAwesomeIcon icon={faBars} className="text-primaryTextColor text-xl cursor-pointer" onClick={() => {
                    setShowSidebar(true);
                }} />
            </div>

            <div className={`lg:hidden fixed top-0 right-0 min-w-[200px] h-screen bg-white flex flex-col justify-start items-center drop-shadow-xl z-10 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className={`w-full h-auto flex flex-row justify-start items-center text-primaryTextColor text-xl ${goldman.className} capitalize p-2`}>
                    <h3>menu</h3>

                    <FontAwesomeIcon icon={faX} className="ml-auto text-sm cursor-pointer" onClick={() => {
                        setShowSidebar(false);
                    }} />
                </div>

                <hr className="w-[95%] border-slate-500" />

                <div className={`flex flex-col gap-y-2 py-2 justify-start items-start w-full h-auto text-primaryTextColor ${oswald.className} text-md capitalize`}>
                    {navItems.map((item, index) => (
                        <p key={index} className={`cursor-pointer hover:bg-slate-200 w-full p-2 ${item.href === currentPage ? 'bg-slate-200' : 'bg-white'}`} onClick={() => {router.push(item.href)}}>{item.label}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}