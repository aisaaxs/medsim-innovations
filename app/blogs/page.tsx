"use client";

import Image from "next/image";
import { Racing_Sans_One } from "next/font/google";
import BlogsBgImage from "../images/Blogs Photos Suzy Hazelwood.jpg";
import blogsImage from "../images/Blogs Photos Suzy Hazelwood.jpg";

const racing_sans_one = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

const blogs = [
  {
    image: blogsImage,
    title: "How Technology is Shaping Healthcare Training",
    snippet: "Explore how cutting-edge tools and simulation technologies are revolutionizing healthcare education.",
    link: "/blog/technology-healthcare-training",
  },
  {
    image: blogsImage,
    title: "Why Realistic Simulators Matter in Medical Training",
    snippet: "Discover the critical role of lifelike simulations in preparing healthcare professionals for real-world challenges.",
    link: "/blog/realistic-simulators",
  },
  {
    image: blogsImage,
    title: "Top Trends in Nursing Education for 2024",
    snippet: "Stay ahead with these emerging trends transforming nursing education and practice.",
    link: "/blog/nursing-education-trends",
  },
  {
    image: blogsImage,
    title: "The Importance of Continuous Medical Learning",
    snippet: "Learn why ongoing education is crucial for healthcare professionals in a fast-changing world.",
    link: "/blog/continuous-medical-learning",
  },
  {
    image: blogsImage,
    title: "How to Choose the Right Medical Training Tools",
    snippet: "A comprehensive guide to selecting tools that align with your training goals.",
    link: "/blog/medical-training-tools",
  },
  {
    image: blogsImage,
    title: "The Future of Healthcare Simulation in 2024",
    snippet: "An in-depth look at how healthcare simulation is evolving and its impact on patient care.",
    link: "/blog/healthcare-simulation-future",
  },
];

export default function BlogsPage(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">

      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <Image
          src={BlogsBgImage}
          alt="Our Blogs"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className={`text-white uppercase text-center mb-6 ${racing_sans_one.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl`}>
            Our Blogs
          </h1>
        </div>
      </div>

      <div className="bg-gray-900 py-12 px-4">
        <div className="container mx-auto flex justify-center gap-4">
          <input
            type="text"
            placeholder="Search Blogs"
            className="w-full md:w-2/3 lg:w-1/2 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="px-6 py-3 bg-green-400 text-gray-900 font-semibold rounded-lg hover:bg-green-500 transition duration-300">
            Search
          </button>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <ul className="space-y-8">
          {blogs.map((blog, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row gap-8 bg-white shadow-md hover:shadow-2xl hover:bg-gray-100 rounded-lg overflow-hidden transition duration-300 border-t-8 border-gray-800"
            >
              <div className="relative w-full lg:w-1/3 h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>

              <div className="lg:w-2/3 flex flex-col justify-between px-6 py-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 transition">
                    {blog.title}
                  </h2>
                  <p className="text-gray-800">{blog.snippet}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={blog.link}
                    className="text-gray-800 font-semibold hover:underline flex items-center"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="ml-2 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}