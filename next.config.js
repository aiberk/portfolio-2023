/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MYACCESSTOKEN: process.env.NEXT_PUBLIC_CONTNETFUL_ACCESS_KEY,
    MYSPACEID: process.env.NEXT_PUBLIC_CONTNETFUL_SPACE_ID,
  },
};

module.exports = nextConfig;

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["mdx", "tsx"],
});
