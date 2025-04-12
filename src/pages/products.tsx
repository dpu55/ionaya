import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Vitera",
        price: "Rp1.300.000 (60 CV)",
        image: "/images/product2.jpg",
        description: "Mengandung mikroalga Tetraselmis chuii dan fiber prebiotik presisi. Kombinasi manfaat antioksidan tinggi dan mikrobioma baik untuk solusi kesehatan yang menyeluruh.",
    },
    {
        id: 2,
        name: "Magna",
        price: "Rp750.000 (30 CV)",
        image: "/images/product3.jpg",
        description: "Minuman sumber energi alami dengan madu dan ginseng.",
    },
    /* {
        id: 3,
        name: "BrainNutri",
        price: "Rp 1.500.000",
        image: "/images/product1.jpg",
        description: "Formula fitonutrien dan kakao untuk vitalitas.",
    }, */
];

const ProductsPage: React.FC = () => {
    return (
        <div className="min-h-screen py-16 px-4 md:px-12 bg-ion-gray">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ion-navy">KATALOG PRODUK</h1>

            <div className="grid gap-8 md:grid-cols-2">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden text-ion-navy">
                        <div className="relative w-full h-64">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 flex flex-col justify-between h-[220px]">
                            <div>
                                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-ion-green">{product.price}</span>
                                <Link href="#" className="text-ion-navy hover:underline font-semibold text-sm">
                                    Detail Produk
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
