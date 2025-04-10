import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  experimental: {
    optimizeCss: false, // ⛔️ Matikan Lightning CSS → pakai PostCSS biasa
  },
};

export default nextConfig;
