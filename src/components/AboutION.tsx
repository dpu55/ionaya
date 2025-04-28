import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { useTranslation } from "next-i18next"; // ✅ Import useTranslation

const AboutION: React.FC = () => {
    const { t } = useTranslation('common'); // ✅ Use the 'common' namespace

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
                    {t('aboutION.title', 'Go Beyond with ION')} {/* ✅ Use translation for the title */}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed">
                    <strong>{t('ion', 'ION')}</strong> {t('aboutION.description1', 'berfokus pada kesehatan dan kesejahteraan melalui produk-produk berkualitas tinggi berbasis bahan alami. Kami berkomitmen untuk memberikan solusi inovatif yang membantu meningkatkan kualitas hidup.')}
                </p>
                <p className="text-lg md:text-xl leading-relaxed mt-4">
                    {t('aboutION.description2', 'Dengan jaringan pemasaran yang kuat dan komunitas yang berkembang, ION menghadirkan peluang bisnis serta gaya hidup sehat bagi masyarakat.')}
                </p>
            </div>
        </motion.section>
    );
};

export default AboutION;
