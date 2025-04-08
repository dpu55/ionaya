import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const JoinION: React.FC = () => {
  return (
    <motion.section
      className="bg-turquoise py-16 px-6 md:px-12 lg:px-24 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabung dengan ION</h2>
      <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
        Jadilah bagian dari komunitas ION dan mulai perjalanan Anda menuju kesehatan
        yang lebih baik dan peluang bisnis yang luar biasa!
      </p>

      {/* Animated Circular Button */}
      <motion.a
        href="https://member.calerie-health.com.my/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-40 h-40 rounded-full bg-white text-turquoise font-semibold text-center flex items-center justify-center shadow-xl border-2 border-turquoise transition mx-auto"
        whileHover={{
          scale: 1.1,
          rotate: 360,
          transition: { duration: 0.6 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="block w-24 text-sm leading-tight text-center">
          Gabung ION
        </span>
      </motion.a>
    </motion.section>
  );
};

export default JoinION;
