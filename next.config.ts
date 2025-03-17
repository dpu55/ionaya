import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export", // ✅ Enables static export
  images: { unoptimized: true } // ✅ Fix image issues on static export
};

module.exports = nextConfig;
