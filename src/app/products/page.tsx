"use client";

import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";
import Loading from "@/components/loading";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProductsPageImage from "../../../public/products/main.jpg";
import { useRouter } from 'next/navigation';
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

export default function Products() {
    const { theme } = useTheme();
    const hasMounted = useHasMounted();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (!hasMounted) return;

        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/product/get");
                const data = await res.json();
                console.log(data);
                setProducts(data);
            } catch(error) {
                console.error("Failed to fetch products: ", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, [hasMounted]);

    if (!hasMounted) return null;

    if (isLoading) {
        return <Loading text="loading" theme={theme} />;
    }

    return (
        <div className={`w-full h-full ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex flex-col`}>
            <div className="relative w-full h-[600px] flex-shrink-0">
                <Image 
                    src={ProductsPageImage}
                    alt="Contact Us Page Image"
                    layout="fit"
                    objectFit="cover"
                    className="w-full h-full"
                />
                
                <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
                
                <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 ${racing_sans_one.className} uppercase`}>
                    <h1 className="lg:text-10xl md:text-9xl text-8xl font-bold leading-tight w-full capitalize text-center">
                        our products
                    </h1>
                </div>
            </div>

            <div className="w-full h-auto p-12 py-24 flex flex-row flex-wrap justify-center items-center gap-8">
                {
                    Array.isArray(products) && products.map((product, index) => (
                        <div key={index} className="w-60 h-80 shadow-lg rounded-lg grid grid-rows-[auto_100px] border-2 hover:scale-105 transition-transform ease-in-out duration-200 cursor-pointer" onClick={() => {router.push('/products/' + product.slug)}}>
                            <div className="w-full h-full flex justify-center items-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={160}
                                    height={160}
                                    className="object-contain rounded-t-lg"
                                />
                            </div>

                            <div className={`w-full h-full flex justify-center items-center p-8 rounded-b-md ${theme === "light" ? "bg-black text-white" : " bg-white text-black"}`}>
                                <p className={`text-center ${racing_sans_one.className} text-2xl text-center`}>{product.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}