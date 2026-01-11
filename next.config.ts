import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Dr.-Mohamed-Osama-Sharkawi',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
