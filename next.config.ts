import type { NextConfig } from "next";
import path from "path";

/**@type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/style')],
  },
  images: {
    domains: [],
  },
};

export default nextConfig;
