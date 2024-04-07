import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    MOCKED: process.env.MOCKED,
    HOST: process.env.HOST,
    API_HOST: process.env.API_HOST,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
