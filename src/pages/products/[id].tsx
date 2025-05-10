import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ product }) => {
  const { t } = useTranslation(['common', 'product']);

  return (
    <>
      <Head>
        <title>{`${product.name} | ${t('common:catalogTitle', 'Katalog Produk')}`}</title>
        <meta name="description" content={product.description} />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-24 pb-16 px-4 md:px-12 bg-ion-gray">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative w-full h-64 md:h-96">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-ion-navy mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-ion-green">{product.price}</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch product data (replace this with your actual data source)
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "/images/product1.jpg", description: "Description for Product 1" },
    { id: 2, name: "Product 2", price: "$20", image: "/images/product2.jpg", description: "Description for Product 2" },
    // Add more products as needed
  ];

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const translations = await serverSideTranslations(locale as string, ['common', 'product']);

  // Safely delete the `default` property if it exists
  if (translations._nextI18Next?.userConfig && "default" in translations._nextI18Next.userConfig) {
    delete (translations._nextI18Next.userConfig as Record<string, unknown>).default;
  }

  // Fetch product data based on ID (replace this with your actual data source)
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "/images/product1.jpg", description: "Description for Product 1" },
    { id: 2, name: "Product 2", price: "$20", image: "/images/product2.jpg", description: "Description for Product 2" },
    // Add more products as needed
  ];

  const product = products.find((p) => p.id.toString() === params?.id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
      ...translations,
    },
  };
};

export default ProductDetailPage;