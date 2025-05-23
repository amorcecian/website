/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only apply basePath and assetPrefix in production (for GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig; 