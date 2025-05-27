/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix for custom domain deployment
  // Only use them if deploying to username.github.io/repository-name
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig; 