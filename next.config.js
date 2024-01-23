/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/tailwind-css-multiple-theme',
  output: 'export',
  experimental: {
    appDir: true,
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
