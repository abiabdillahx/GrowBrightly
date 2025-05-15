/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me', 'images.unsplash.com', 'www.rch.org.au'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
    ],
  },
};

export default nextConfig;
