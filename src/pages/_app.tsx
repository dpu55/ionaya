import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";

// ✅ Load Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-opensans", // ✅ Define the CSS variable
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${openSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
