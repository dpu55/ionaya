import type { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Head from "next/head";
import Navbar from "../components/Navbar";
import VideoSlider from "../components/VideoSlider";
import AboutION from "../components/AboutION";
import IonBenefits from "../components/IonBenefits";
import IonProducts from "../components/IonProducts";
import JoinION from "../components/JoinION";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className="home-page">
      <Head>
        <title>ION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <VideoSlider />
      <section id="AboutION">
        <AboutION />
      </section>
      <IonBenefits /> {/* Bagian Keunggulan */}
      <IonProducts /> {/* Bagian Produk */}
      <JoinION /> {/* Call-to-Action */}
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, ['common']);

  // Hapus properti `default` dari userConfig yang tidak bisa diserialisasi
  if (translations && translations._nextI18Next?.userConfig?.default) {
    delete translations._nextI18Next.userConfig.default;
  }

  return {
    props: {
      ...translations,
    },
  };
}


export default Home;
