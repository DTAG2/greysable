import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/greysable",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
