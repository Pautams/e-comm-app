import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "", // Optional
        pathname: "/**", // Allows any path
      },
    ],
  },
};

export default nextConfig;
