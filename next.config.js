/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Set the timeout value in milliseconds (e.g., 10 minutes)
    apiTimeout: 20000,
  },
};

module.exports = nextConfig;
