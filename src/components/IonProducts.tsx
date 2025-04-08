import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations"; // ✅ Import the animation

const products = [
    { id: 1, name: "VITERA", image: "/images/product1.jpg" },
    { id: 2, name: "VITERA", image: "/images/product2.jpg" },
    { id: 3, name: "MAGNA", image: "/images/product3.jpg" },
];

const IonProducts: React.FC = () => {
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
                    Produk Kami
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-900 mb-12">
                    Temukan berbagai produk kesehatan alami dari ION yang mendukung gaya hidup sehat Anda.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white text-gray-900 shadow-md rounded-lg overflow-hidden">
                            <Image src={product.image} alt={product.name} width={400} height={300} className="w-full object-cover" />
                            <h3 className="text-xl font-semibold p-4">{product.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default IonProducts;
