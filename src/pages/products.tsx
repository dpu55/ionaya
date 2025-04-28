// pages/products.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// Reusable ProductCard component
const ProductCard: React.FC<{
  product: { id: number; name: string; price: string; image: string; description: string };
}> = ({ product }) => {
  const { t } = useTranslation('product');
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden text-ion-navy">
      <div className="relative w-full h-64">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between h-[220px]">
        <div>
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-ion-green">{product.price}</span>
          <Link href="#" className="text-ion-navy hover:underline font-semibold text-sm">
            {t('detailProduct', 'Detail Produk')}
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const { t } = useTranslation(['common', 'product']);

  // Fetch product data from translations
  const products = t('product:products', { returnObjects: true }) as Array<{
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
  }>;

  // Page title and meta description
  const pageTitle = `${t('common:catalogTitle', 'Katalog Produk')} | ION`;
  const pageDescription = t(
    'common:catalogDescription',
    "Lihat berbagai produk berkualitas dari IONAYA, termasuk Vitera dan Magna."
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-24 pb-16 px-4 md:px-12 bg-ion-gray">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ion-navy">
          {t('common:catalogTitle', 'KATALOG PRODUK')}
        </h1>

        <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
          {Array.isArray(products) &&
            products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, ['common', 'product']);

  // Safely delete the `default` property if it exists
  if (translations._nextI18Next?.userConfig && "default" in translations._nextI18Next.userConfig) {
    delete (translations._nextI18Next.userConfig as Record<string, unknown>).default;
  }

  return {
    props: {
      ...translations,
    },
  };
}
