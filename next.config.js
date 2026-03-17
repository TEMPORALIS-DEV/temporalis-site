/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  compress: true,
  reactStrictMode: true,
};

module.exports = nextConfig;