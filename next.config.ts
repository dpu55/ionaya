import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ Enables static export
  images: { unoptimized: true }, // ✅ Fix image issues on static export
};

export default nextConfig;
