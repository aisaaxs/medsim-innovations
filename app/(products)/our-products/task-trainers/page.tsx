"use client";

import { motion } from "framer-motion";
import TaskTrainersImg from "../../../../images/roma-kit.png";
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import CentralLineIVTorso from "../../../../images/Central Line IV Torso.jpeg";
import IVTorso from "../../../../images/IV Torso.jpeg";
import PeritonealDialysisModel from "../../../../images/Peritoneal dialysis training model.jpeg";
import VenipunctureIVArm from "../../../../images/Venipuncture IV arm model.jpeg";
import InfantSimulator from "../../../../images/Advanced full function infant simulator.jpeg";
import FullBodyNursingManikin from "../../../../images/Full body nursing manikin.jpeg";
import IVPracticeArmKit from "../../../../images/Intravenous Practice Arm Kit with Intradermal Injection Spots.jpeg";

export default function SutureKit() {
    const router = useRouter();

    const includedProducts = [
        {
            name: "Center Line IV Torso",
            image: CentralLineIVTorso,
        },
        {
            name: "IV Torso",
            image: IVTorso,
        },
        {
            name: "Peritoneal Dialysis Training Model",
            image: PeritonealDialysisModel,
        },
        {
            name: "Venipuncture IV Arm Model",
            image: VenipunctureIVArm,
        },
        {
            name: "Advanced Full-Function Infant Simulator",
            image: InfantSimulator,
        },
        {
            name: "Full-Body Nursing Manikin",
            image: FullBodyNursingManikin,
        },
        {
            name: "Intravenous Practice Arm Kit with Intradermal Injection Spots",
            image: IVPracticeArmKit,
        },
    ];    
    
    return (
        <div className="w-full">
            <div className="relative h-auto py-10 bg-gradient-to-b from-purple-400 to-white flex flex-col items-center justify-center text-center px-6">
                <motion.h1
                className="text-5xl font-extrabold text-gray-900"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >
                Task Trainers
                </motion.h1>
                <motion.p
                className="text-lg text-gray-600 mt-4 max-w-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >
                    A collection of high-quality simulation models designed to help healthcare professionals practice essential clinical procedures, including IV insertion, venipuncture, peritoneal dialysis, and infant care.
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
                    src={TaskTrainersImg}
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
                <h2 className="text-3xl font-bold text-gray-800">Master Critical Medical Procedures
                </h2>
                <p className="text-lg text-gray-600">
                    Task trainers offer a hands-on approach to mastering critical medical procedures in a controlled environment.
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                    <li>Provides a risk-free setting for hands-on skill development.</li>
                    <li>Enhances procedural accuracy and clinical confidence.</li>
                    <li>Designed for repeated use to reinforce learning and muscle memory.</li>
                    <li>Ideal for medical students, nurses, and healthcare professionals.</li>
                </ul>
                </motion.div>
            </div>

            <div className="w-full h-auto px-10 flex flex-col justify-center items-center gap-y-10 pt-10 pb-20">
                <h2 className="text-4xl font-bold text-gray-800">What&apos;s Included?
                </h2>

                <div className="w-full h-auto flex justify-center items-center flex-row flex-wrap gap-x-8 gap-y-8">
                    {
                        includedProducts.map((product, index) => (
                            <div key={index} className="w-60 h-72 border-2 border-gray-900 grid grid-rows-[60%_auto] transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-md rounded-lg">
                                <div className="w-full h-full flex justify-center items-center">
                                    <Image src={product.image} alt={product.name} className="w-full h-full rounded-t-lg" />
                                </div>

                                <div className="w-full h-full flex justify-center items-center p-2 bg-purple-950">
                                    <p className="text-lg font-bold font-sans text-white capitalize text-center">{product.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="bg-gradient-to-t from-purple-400 to-white py-16 text-center">
                <motion.h2
                className="text-4xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                >
                Enhance Clinical Training with Task Trainers
                </motion.h2>
                <motion.a
                href="/contact-us"
                className="mt-6 px-8 py-4 text-white bg-purple-600 rounded-lg shadow-lg text-lg hover:bg-purple-700 transition inline-block"
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