/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MYACCESSTOKEN: process.env.NEXT_PUBLIC_CONTNETFUL_ACCESS_KEY,
    MYSPACEID: process.env.NEXT_PUBLIC_CONTNETFUL_SPACE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/9ml0r0lfbqrn/**",
      },
    ],
  },
};

// "//images.ctfassets.net/9ml0r0lfbqrn/3pgIWjjMVatB9i4yQsQFev/28c96ce7c00100a033b9e2862bd7961b/_.jpeg"
// "//images.ctfassets.net/9ml0r0lfbqrn/4pRK0BxMxZlxORarTFdqUU/8f0b37e421f714b7bb1e1cb84e1713a5/shakes.jpeg"

module.exports = nextConfig;

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["mdx", "tsx"],
});
