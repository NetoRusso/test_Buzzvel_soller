import type { NextConfig } from "next";
import path from "path";

/**@type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/style')],
  },

};

export default nextConfig;
