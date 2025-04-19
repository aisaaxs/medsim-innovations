"use client";

import Image from "next/image";
import MedSimInnovationsLogo from "../../public/logo.png";
import { Audiowide, Roboto } from 'next/font/google';
import Link from "next/link";
import sunIcon from "../../public/icons/sun-solid.svg";
import moonIcon from "../../public/icons/moon-solid.svg";
import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";
import barsIcon from "../../public/icons/bars-solid.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";
import xMarkIcon from "../../public/icons/xmark-solid.svg";
import { useRouter } from "next/navigation";

const audiowide = Audiowide({
    weight: '400',
    subsets: ['latin'],
});

const roboto = Roboto({
    weight: '600',
    subsets: ['latin'],
});

const navLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About Us",
        href: "/about"
    },
    {
        label: "Our Products",
        href: "/products"
    },
    {
        label: "Contact Us",
        href: "/contact"
    }
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const hasMounted = useHasMounted();
    const pathname = usePathname();
    const [showSidebar, setShowSidebar] = useState(false);
    const router = useRouter();

    if (!hasMounted) return null;

    return (
        <div className={`w-full min-h-18 max-h-18 ${theme === "light" ? "bg-white text-black shadow-black" : "bg-black text-white shadow-white"} shadow-sm flex flex-row justify-start items-center py-4 px-6 gap-16 z-50 fixed top-0 left-0`}>
            <Link href="https://www.medsiminnovations.com" className="w-auto h-full flex flex-row justify-center items-center whitespace-nowrap gap-4 cursor-pointer">
                <Image src={MedSimInnovationsLogo} alt="MedSim Innovations Logo" className="w-12 h-12" />

                <h1 className={`${audiowide.className} text-3xl sm:visible max-sm:hidden`}>
                    MedSim Innovations
                </h1>

                <h1 className={`${audiowide.className} text-3xl sm:hidden max-sm:visible`}>
                    MSI
                </h1>
            </Link>

            <div className="w-auto h-full ml-auto flex flex-row justify-center items-center gap-6 lg:visible max-lg:hidden">
                {
                    navLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.href} className={`text-lg capitalize ${roboto.className} ${pathname === link.href ? `${theme === "light" ? "bg-black text-white" : "bg-white text-black"}` : `hover:underline`} capitalize`}>{link.label}</Link>
                        )
                    })
                }
            </div>

            {/*<div className="w-auto h-full flex flex-row justify-center items-center gap-4 xl:visible max-xl:hidden">
                <Link href="/login" className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 ${roboto.className} capitalize text-lg rounded-xs`}>
                    login
                </Link>

                <Link href="/signup" className={`bg-green-500 hover:bg-green-600 text-white px-4 py-1 ${roboto.className} capitalize text-lg rounded-xs`}>
                    signup
                </Link>
            </div>*/}

            <div className="w-auto h-full flex justify-center items-center lg:visible max-lg:hidden">
                <Image src={theme === "light" ? sunIcon : moonIcon} alt="Light Mode" className={`w-10 h-10 cursor-pointer ${theme === "light" ? "invert-0" : "invert-100"} hover:bg-black/10 p-2 rounded-xs`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                />
            </div>

            <div className="w-auto h-full flex justify-center items-center ml-auto lg:hidden max-lg:visible">
                <Image src={barsIcon} alt="Navigation Menu" className={`w-10 h-10 cursor-pointer ${theme === "light" ? "invert-0" : "invert-100"} hover:bg-black/10 p-2 rounded-xs`} onClick={() => setShowSidebar(true)} />
            </div>

            {
                showSidebar && (
                    <div className={`absolute w-screen h-screen top-0 left-0 ${theme === "light" ? "bg-white" : "bg-black"} flex flex-col lg:hidden`}>
                        <div className={`w-auto mi-h-18 max-h-18 flex flex-row justify-start items-center py-4 px-6 border-b-1 ${theme === "light" ? "border-black" : "border-white"}`}>
                            <h1 className={`${audiowide.className} text-3xl capitalize`}>
                                menu
                            </h1>

                            <Image src={xMarkIcon} alt="Navigation Menu" className={`w-10 h-10 cursor-pointer ${theme === "light" ? "invert-0" : "invert-100"} hover:bg-black/10 p-2 rounded-xs ml-auto`} onClick={() => setShowSidebar(false)} />
                        </div>

                        <div className="w-full h-auto flex flex-col">
                            {
                                navLinks.map((link, index) => {
                                    return (
                                        <Link key={index}  onClick={() => {setShowSidebar(false); router.push(link.href);}} href={link.href} className={`w-full h-16 border-b-1 flex justify-start items-center p-4 ${roboto.className} text-lg capitalize ${pathname === link.href ? `${theme === "light" ? "bg-black text-white" : "bg-white text-black"}` : `${theme === "light" ? "hover:bg-black/20" : "hover:bg-white/20"}`}`}>{link.label}</Link>
                                    )
                                })
                            }
                        </div>

                        <div className={`w-full h-16 border-b-1 flex justify-start items-center p-4 ${roboto.className} text-lg ${theme === "light" ? "border-black hover:bg-black/20" : "border-white hover:bg-white/20"} capitalize gap-4`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                            <Image src={theme === "light" ? sunIcon : moonIcon} alt="Navigation Menu" className={`w-6 h-6 ${theme === "light" ? "invert-0" : "invert-100"}`} />

                            toggle dark mode
                        </div>

                        {/*<Link href="/login" className={`w-full h-16 mt-auto border-t-1 flex justify-start items-center p-4 ${roboto.className} text-lg bg-blue-500 hover:bg-blue-600 border-blue-500 text-white capitalize`}>
                            login
                        </Link>

                        <Link href="/login" className={`w-full h-16 border-t-1 flex justify-start items-center p-4 ${roboto.className} text-lg bg-green-500 hover:bg-green-600 border-green-500 text-white capitalize`}>
                            signup
                        </Link>*/}
                    </div>
                )
            }
        </div>
    )
}