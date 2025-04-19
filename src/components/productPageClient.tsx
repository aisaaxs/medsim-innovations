"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import leftLongIcon from "../../public/icons/left-long-solid.svg";
import { Racing_Sans_One, Roboto } from "next/font/google";
import { useRouter, usePathname } from 'next/navigation';

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

type Props = {
  product: Product;
};

const taskTrainerProducts = [
  {
    src: "/products/task-trainers/advanced-full-function-infant-simulator.jpeg",
    name: "Advanced Full Function Infant Simulator",
  },
  {
    src: "/products/task-trainers/central-line-iv-torso.jpeg",
    name: "Central Line IV Torso",
  },
  {
    src: "/products/task-trainers/full-body-nursing-manikin.jpeg",
    name: "Full Body Nursing Manikin",
  },
  {
    src: "/products/task-trainers/intravenous-practice-arm-kit-with-intradermal-injection-spots.jpeg",
    name: "Intravenous Practice Arm Kit with Intradermal Injection Spots",
  },
  {
    src: "/products/task-trainers/iv-torso.jpeg",
    name: "IV Torso",
  },
  {
    src: "/products/task-trainers/peritoneal-dialysis-training-model.jpeg",
    name: "Peritoneal Dialysis Training Model",
  },
  {
    src: "/products/task-trainers/venipuncture-iv-arm-model.jpeg",
    name: "Venipuncture IV Arm Model",
  },
];

export default function ProductPageClient({ product }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full p-12 py-24 relative bg-white">

      </div>
    );
  }

  return (
    <div className={`w-full h-full p-12 relative ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <div className="w-full h-auto grid grid-cols-[100px_auto]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-20 h-12 border-2 rounded-full flex justify-center items-center cursor-pointer hover:scale-105" onClick={() => {router.push("/products")}}>
            <Image
              src={leftLongIcon}
              alt="left long icon"
              className={`w-full h-full ${theme === "light" ? "invert-0" : "invert-100"}`}
            />
          </div>
        </div>

         <div className="w-full h-full flex justify-center items-center p-4">
          <h2 className={`${racing_sans_one.className} md:text-6xl max-md:text-4xl text-right`}>
            {product.name}
          </h2>
        </div>
      </div>

      <div className="w-full h-full grid md:grid-cols-2 max-md:grid-rows-2">
        <div className="w-full h-auto flex justify-center items-center max-md:order-2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className=""
          />
        </div>

        <div className="w-full h-full flex justify-center items-center md:p-16 max-md:p-4 max-md:order-1">
          <p className={`${roboto.className} text-lg text-center`}>
            {product.description}
          </p>
        </div>
      </div>

      {pathname === "/products/task-trainers" && (
        <section className="w-full py-16 flex flex-col gap-y-8">
          <h3 className={`${racing_sans_one.className} text-3xl md:text-4xl text-center`}>
            Related Task Trainers
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {taskTrainerProducts.map((trainer, idx) => (
              <div key={idx} className="w-96 h-32 border-2 rounded-xl grid grid-cols-[140px_auto] overflow-hidden hover:scale-105 transition">
                <Image
                  src={trainer.src}
                  alt={trainer.name}
                  width={140}
                  height={140}
                  className="object-cover h-full w-full rounded-l-md"
                />
                <div className="flex items-center px-4">
                  <p className={`${roboto.className} text-md text-left capitalize`}>
                    {trainer.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
