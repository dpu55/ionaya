import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations"; // ✅ Import the animation
import { useTranslation } from "next-i18next"; // ✅ Import useTranslation

const IonProducts: React.FC = () => {
    const { t } = useTranslation("common"); // ✅ Use the 'common' namespace

    // Products data with translations
    const products = [
        /* { id: 1, name: t("products.vitera.name", "VITERA"), image: "/images/product1.jpg", description: t("products.vitera.description", "A premium health supplement.") }, */
        { id: 2, name: t("products.vitera.name", "VITERA"), image: "/images/product2.jpg", description: t("products.vitera.description", "A premium superfood.") },
        { id: 3, name: t("products.magna.name", "MAGNA"), image: "/images/product3.jpg", description: t("products.magna.description", "A natural energy booster.") },
    ];

    return (
        <motion.section
            className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp} // ✅ Apply animation
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {t("products.title", "Our Products")}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-900 mb-12">
                    {t("products.description", "Discover a variety of natural health products from ION that support your healthy lifestyle.")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white text-gray-900 shadow-md rounded-lg overflow-hidden">
                            <Image src={product.image} alt={product.name} width={400} height={300} className="w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default IonProducts;
