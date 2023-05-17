/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://jsonplaceholder.typicode.com/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
