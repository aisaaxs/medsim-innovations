import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com'], // Add the external image domain here
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
