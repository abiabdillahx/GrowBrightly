/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
    ],
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
