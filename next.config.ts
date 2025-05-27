import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oldschool.runescape.wiki',
      },
    ],
  },
};

export default nextConfig;
