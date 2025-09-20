import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static1.mujerhoy.com",
        pathname: "/www/multimedia/**",
      },
      {
        protocol: "https",
        hostname: "imagessl.casadellibro.com",
        pathname: "/img/autores/**",
      },
      {
        protocol: "https",
        hostname: "trabalibros.com",
        pathname: "/rs/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.gr-assets.com",
        pathname: "/authors/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/S/amzn-author-media-prod/**",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
