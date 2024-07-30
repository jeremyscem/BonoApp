/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bono-webapp-causes-images.s3.amazonaws.com',
        port: '',
        pathname: '/global/*',
      },
    ],
  },
};

export default nextConfig
