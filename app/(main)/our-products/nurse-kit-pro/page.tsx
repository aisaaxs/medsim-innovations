"use client";

import { motion } from "framer-motion";
import NurseKitProImg from "../../../../images/nurse-kit-pro.png";
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function NurseKitPro() {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="relative h-auto py-10 bg-gradient-to-b from-cyan-400 to-white flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nurse Kit Pro
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The ultimate nursing companion. Designed for professionals, perfect for students.
        </motion.p>
      </div>

      <div className="border-2 border-gray-900 rounded-full w-auto max-w-36 h-auto px-4 py-2 flex justify-center items-center cursor-pointer relative left-1/2 transform -translate-x-1/2 hover:bg-gray-900 z-50 hover:text-white group transition-all duration-300 flex-row gap-x-2" onClick={() => {router.push('/our-products')}}>
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:text-white text-gray-900 transition-all duration-300" />
          <p className="font-bold">Back</p>
      </div>

      <div className="relative bg-white py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={NurseKitProImg}
            alt="Nurse Kit Pro"
            width={600}
            height={600}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Smart Design</h2>
          <p className="text-lg text-gray-600">
            With spacious compartments, intuitive layouts, and durable materials,
            Nurse Kit Pro ensures you have everything you need at your fingertips.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Built-in organizer for tools and stationery.</li>
            <li>Ergonomic design for comfort during long shifts.</li>
            <li>Water-resistant material for durability.</li>
          </ul>
        </motion.div>
      </div>

      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Perfect for Students</h3>
            <p className="text-gray-600 mt-2">
              Tailored to meet the demands of academic and clinical environments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Durable Materials</h3>
            <p className="text-gray-600 mt-2">
              Made with premium water-resistant materials for long-lasting use.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Stylish & Practical</h3>
            <p className="text-gray-600 mt-2">
              A sleek design that fits seamlessly into any environment.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 px-6">
        <motion.h2
            className="text-4xl font-bold text-gray-800 text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            See Nurse Kit Pro in Action
        </motion.h2>
        <div className="mt-8 flex justify-center">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-lg shadow-lg w-full max-w-3xl overflow-hidden"
            >
            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/qNelmMd-poI"
                title="Nurse Kit Pro Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full rounded-lg"
            ></iframe>
            </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-cyan-400 to-white py-16 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Ready to Experience the Difference?
        </motion.h2>
        <motion.a
          href="/contact-us"
          className="mt-6 px-8 py-4 text-white bg-green-600 rounded-lg shadow-lg text-lg hover:bg-green-700 transition inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Order Now
        </motion.a>
      </div>
    </div>
  );
}