/** @type {import('next').NextConfig} */
const nextConfig = {
  // Re-enabled linting and TypeScript checking for better code quality
  eslint: {
    // Only ignore during builds if absolutely necessary for deployment
    // ignoreDuringBuilds: false,
  },
  typescript: {
    // Only ignore build errors if absolutely necessary for deployment
    // ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
