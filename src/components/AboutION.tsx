import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations"; // ✅ Import the animation

const AboutION: React.FC = () => {
    return (
        <motion.section
            className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp} // ✅ Apply animation
        >
            <div className="bg-ion-green text-black p-4 rounded-md">
                Warna ION berhasil!
            </div>

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-turquoise mb-6">
                    Go Beyond with ION
                </h2>
                <p className="text-lg md:text-xl leading-relaxed">
                    <strong>ION</strong> berfokus pada
                    kesehatan dan kesejahteraan melalui produk-produk berkualitas tinggi berbasis
                    bahan alami. Kami berkomitmen untuk memberikan solusi inovatif yang membantu
                    meningkatkan kualitas hidup.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mt-4">
                    Dengan jaringan pemasaran yang kuat dan komunitas yang berkembang, ION
                    menghadirkan peluang bisnis serta gaya hidup sehat bagi masyarakat.
                </p>
            </div>
        </motion.section>
    );
};

export default AboutION;
