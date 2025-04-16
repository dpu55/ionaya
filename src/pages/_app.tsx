import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next"; // Import appWithTranslation

// ✅ Load Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-opensans", // ✅ Define the CSS variable
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.videodelivery.net/embed/sdk.latest.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <main className={`${openSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

// Bungkus komponen App dengan appWithTranslation agar instance i18next terinisialisasi
export default appWithTranslation(MyApp);
