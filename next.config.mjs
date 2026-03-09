/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'exporte',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
