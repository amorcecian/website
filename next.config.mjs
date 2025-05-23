/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',
  assetPrefix: '/website',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig; 