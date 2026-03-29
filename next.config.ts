import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Optional
        pathname: "/**", // Allows any path
      },
    ],
  },
};

export default nextConfig;
