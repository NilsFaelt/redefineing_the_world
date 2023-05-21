/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    serverTimeout: 20000,
  },
};

module.exports = nextConfig;
