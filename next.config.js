/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/tailwind-css-multiple-theme',

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
