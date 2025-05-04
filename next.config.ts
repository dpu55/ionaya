import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: {
    optimizeCss: false, // ⛔️ Matikan Lightning CSS → pakai PostCSS biasa
  },
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    localeDetection: false, // Nonaktifkan deteksi berdasarkan preferensi browser
  },
};

export default nextConfig;
