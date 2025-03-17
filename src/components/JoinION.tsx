import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations"; // ✅ Import the animation

const JoinION: React.FC = () => {
    return (
        <motion.section
            className="bg-turquoise py-16 px-6 md:px-12 lg:px-24 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp} // ✅ Apply animation
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabung dengan ION</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
                Jadilah bagian dari komunitas ION dan mulai perjalanan Anda menuju kesehatan yang lebih baik dan peluang bisnis yang luar biasa!
            </p>
            <button className="bg-turquoise text-black font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:bg-gray-200 transition">
                Bergabung Sekarang
            </button>
        </motion.section>
    );
};

export default JoinION;
