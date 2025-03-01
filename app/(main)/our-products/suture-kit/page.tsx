"use client";

import { motion } from "framer-motion";
import SutureKitImg from "../../../../images/suture-kit.png";
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function SutureKit() {
    const router = useRouter();
    
  return (
    <div className="w-full">
      <div className="relative h-auto py-10 bg-gradient-to-b from-red-400 to-white flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Suture Kit
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A training suture kit designed to refine and practice essential suturing skills.
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
            src={SutureKitImg}
            alt="Suture Kit"
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
          <h2 className="text-3xl font-bold text-gray-800">Realistic Training</h2>
          <p className="text-lg text-gray-600">
            This suture kit is ideal for medical and nursing students to practice under realistic conditions.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Variety of suturing materials to simulate real-world scenarios.</li>
            <li>Durable tools for repeated practice sessions.</li>
            <li>Compact and portable for training anywhere.</li>
          </ul>
        </motion.div>
      </div>
      <div className="bg-gradient-to-t from-red-400 to-white py-16 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Ready to Refine Your Skills?
        </motion.h2>
        <motion.a
          href="/contact-us"
          className="mt-6 px-8 py-4 text-white bg-red-600 rounded-lg shadow-lg text-lg hover:bg-red-700 transition inline-block"
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