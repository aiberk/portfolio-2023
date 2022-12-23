/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  env: {
    CONTNETFUL_ACCESS_KEY: process.env.CONTNETFUL_ACCESS_KEY,
    CONTNETFUL_SPACE_ID: process.env.CONTNETFUL_SPACE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

//Tulip Example
// exportPathMap: function () {
//   return {
//     '/': { page: '/' },
//     '/apps': { page: '/apps', query: { query: 'query' } },
//     '/apps/[id]': { page: '/apps/[id]' },
//   };
// },
// trailingSlash: true,
