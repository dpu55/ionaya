import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import VideoSlider from "../components/VideoSlider";
import AboutION from "../components/AboutION";
import IonBenefits from "../components/IonBenefits";
import IonProducts from "../components/IonProducts";
import JoinION from "../components/JoinION";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="home-page">
      <Head>
        <title>ION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <VideoSlider />
      <AboutION />
      <IonBenefits /> {/* Bagian Keunggulan */}
      <IonProducts /> {/* Bagian Produk */}
      <JoinION /> {/* Call-to-Action */}
      <Footer />
    </div>
  );
};

export default Home;
