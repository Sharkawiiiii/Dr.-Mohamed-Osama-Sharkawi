import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Dr.-Mohamed-Osama-Sharkawi' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  trailingSlash: true,
};

export default nextConfig;
