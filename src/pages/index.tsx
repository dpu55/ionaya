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
import type { UserConfig as NextI18NextUserConfig } from "next-i18next";

interface ExtendedUserConfig extends NextI18NextUserConfig {
  default?: unknown; // Add the `default` property
}

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, ['common', 'product']);

  // Cast `userConfig` to the extended type
  const userConfig = translations._nextI18Next?.userConfig as ExtendedUserConfig;

  // Safely delete the `default` property if it exists
  if (userConfig?.default) {
    delete userConfig.default;
  }

  return {
    props: {
      ...translations,
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className="home-page">
      <Head>
        <title>{t("ion", "ION")}</title>
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

export default Home;
