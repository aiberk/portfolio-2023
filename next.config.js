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
    MYACCESSTOKEN: process.env.NEXT_PUBLIC_CONTNETFUL_ACCESS_KEY,
    MYSPACEID: process.env.NEXT_PUBLIC_CONTNETFUL_SPACE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
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
