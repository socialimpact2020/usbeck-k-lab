/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2p8484c990lgc.cloudfront.net", // if your website has no www, drop it
      },
    ],
  },
};

module.exports = nextConfig;
