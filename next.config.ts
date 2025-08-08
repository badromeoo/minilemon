import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'indodax.com', // Izinkan gambar dari domain ini
        port: '',
        pathname: '/v2/logo/**', // Izinkan path gambar spesifik
      },
    ],
  },
};

export default nextConfig;
