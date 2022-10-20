/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['press.hulu.com', 'image.tmdb.org'],
  },
}
