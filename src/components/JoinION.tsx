import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { useTranslation } from "next-i18next";

const JoinION: React.FC = () => {
    const { t } = useTranslation("common"); // ✅ Use the 'common' namespace

    return (
        <motion.section
            className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("join.title", "Join ION")}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                {t(
                    "join.description",
                    "Be part of the ION community and start your journey toward better health and amazing business opportunities!"
                )}
            </p>

            {/* Animated Circular Button */}
            <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-40 h-40 rounded-full bg-white text-black font-semibold text-center flex items-center justify-center shadow-xl border-[2px] border-ion-green-light transition-all duration-500 overflow-hidden group mx-auto"
                whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Background sliding overlay */}
                <span className="absolute inset-0 bg-ion-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                {/* Text */}
                <span className="relative z-10 block w-24 text-sm leading-tight text-center group-hover:text-white transition-colors duration-300">
                    <p>{t("join.button", "JOIN")}</p>
                    <p>
                        <strong>{t("ion", "ION")}</strong>
                    </p>
                </span>
            </motion.a>
        </motion.section>
    );
};

export default JoinION;
