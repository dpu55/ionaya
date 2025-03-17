import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations"; // ✅ Import the animation

const IonBenefits: React.FC = () => {
    return (
        <motion.section
            className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp} // ✅ Apply animation
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-turquoise mb-6">
                    Keunggulan ION
                </h2>
                <p className="text-lg md:text-xl leading-relaxed mb-12">
                    Mengapa memilih ION? Kami menawarkan produk berkualitas tinggi dengan
                    bahan alami, inovasi terkini, dan jaringan bisnis yang kuat.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <Image src="/images/benefit1.svg" alt="Natural Ingredients" width={80} height={80} />
                        <h3 className="text-xl font-semibold mt-4">Bahan Alami</h3>
                        <p className="text-gray-600 text-center mt-2">Kami hanya menggunakan bahan alami terbaik untuk kesehatan Anda.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/benefit2.svg" alt="Innovation" width={80} height={80} />
                        <h3 className="text-xl font-semibold mt-4">Inovasi Terdepan</h3>
                        <p className="text-gray-600 text-center mt-2">Produk kami dikembangkan dengan teknologi terbaru.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/benefit3.svg" alt="Business Network" width={80} height={80} />
                        <h3 className="text-xl font-semibold mt-4">Jaringan Bisnis</h3>
                        <p className="text-gray-600 text-center mt-2">Peluang bisnis menarik dengan dukungan komunitas besar.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default IonBenefits;
