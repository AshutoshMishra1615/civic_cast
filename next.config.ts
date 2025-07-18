import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "plus.unsplash.com",
      },
      { hostname: "images.unsplash.com" },

      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
