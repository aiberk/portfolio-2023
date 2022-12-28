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
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
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
      {
        protocol: "https",
        hostname: "assets.ctfassets.net",
        pathname: "**",
      },
    ],
  },
  // experimental: {
  //   urlImports: ["https://https://www.youtube.com/embed/"],
  // },
};

// https:////assets.ctfassets.net/9ml0r0lfbqrn/7sKtwLDA0eNGqRjpQ8aSaB/6add39f28e22502d47d3ce3e527511a6/FgnxcUQ5vho

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
