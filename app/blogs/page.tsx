"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Racing_Sans_One } from "next/font/google";
import BlogsBgImage from "../images/Blogs Photos Suzy Hazelwood.jpg";
import { ChevronRight } from "lucide-react";
import blogsImage from "../images/Blogs Photos Suzy Hazelwood.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
});

const blogs = [
  {
    image: blogsImage,
    title: "blog title",
    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, sem vel scelerisque accumsan, nulla sem ornare diam, non rutrum elit mauris ut risus.",
    link: "/blog-link",
  },
  {
    image: blogsImage,
    title: "blog title",
    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, sem vel scelerisque accumsan, nulla sem ornare diam, non rutrum elit mauris ut risus.",
    link: "/blog-link",
  },
  {
    image: blogsImage,
    title: "blog title",
    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, sem vel scelerisque accumsan, nulla sem ornare diam, non rutrum elit mauris ut risus.",
    link: "/blog-link",
  },
  {
    image: blogsImage,
    title: "blog title",
    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, sem vel scelerisque accumsan, nulla sem ornare diam, non rutrum elit mauris ut risus.",
    link: "/blog-link",
  },
  {
    image: blogsImage,
    title: "blog title",
    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, sem vel scelerisque accumsan, nulla sem ornare diam, non rutrum elit mauris ut risus.",
    link: "/blog-link",
  },
  {
    image: blogsImage,
    title: "blog title",
    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, sem vel scelerisque accumsan, nulla sem ornare diam, non rutrum elit mauris ut risus.",
    link: "/blog-link",
  },
];

export default function BlogsPage(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />

      <div className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-tr from-[#009cdb] to-[#00c7e2]">
        <Image
          src={BlogsBgImage}
          alt="Our Blog"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}>
            Our Blogs
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300"></div>
              </div>
              <div className="flex flex-col">
                <div className="w-full h-full px-6 py-4 pb-10">
                    <h2 className="text-2xl font-semibold text-primaryTextColor mb-2 group-hover:text-blue-600 transition capitalize">
                    {blog.title}
                    </h2>
                    <p className="text-primaryTextColor mb-4 capitalize">{blog.snippet}</p>
                </div>
            
                <div className="w-full h-auto absolute bottom-2 left-0 flex flex-row px-6">
                    <a href={blog.link} className="text-blue-600 font-semibold hover:underline capitalize">
                        Read More
                    </a>

                    <ChevronRight className="text-blue-600 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}