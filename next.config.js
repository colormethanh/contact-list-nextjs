const { sources } = require('next/dist/compiled/webpack/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
        source: "/",
        destination: "/contacts",
        permanent: true
      }];
  }
};

module.exports = nextConfig
