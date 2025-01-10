"use client";
import React, { useState } from "react";
import MedSimLogo from "../../../../images/Med Sim Logo.png";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/admin/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/admin/login';
};
  
export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-white h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleLogout,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-white w-full flex-1 mx-auto overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/admin"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image className="w-8 h-auto" src={MedSimLogo} alt="MedSim Innovations Logo" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-extrabold text-xl text-white whitespace-pre"
      >
        MedSim Innovations
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/admin"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image className="w-8 h-auto" src={MedSimLogo} alt="MedSim Innovations Logo" />
    </Link>
  );
};