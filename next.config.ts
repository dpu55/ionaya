import type { NextConfig } from "next";
import { i18n } from './next-i18next.config';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: {
    optimizeCss: false, // ⛔️ Matikan Lightning CSS → pakai PostCSS biasa
  },
  i18n,
};

export default nextConfig;
