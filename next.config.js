/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cloudinary.com' }]
  },
  transpilePackages: ['geist', 'lucide-react'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/steven-tey/precedent',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
