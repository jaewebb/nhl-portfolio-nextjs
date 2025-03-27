import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.nhle.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: Boolean(process.env.IGNORE_BUILD_ERRORS) || false,
  },
}

export default nextConfig
