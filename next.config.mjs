/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Enable image optimization
    domains: ['v0.blob.com'], // Allow images from v0.blob.com
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Configure server actions properly for Next.js 15
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app'],
    },
  },
  // Improve performance with webpack optimizations
  webpack: (config) => {
    // Add support for GLB/GLTF files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    
    return config;
  },
  // Removed the headers configuration completely to fix build errors
}

export default nextConfig
