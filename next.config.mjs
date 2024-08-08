/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          remote: 'remote@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        exposes: {
          // Expose modules from the Host application
        },
        shared: {
          // Shared dependencies between the Host and Remote applications
        },
      }),
    );
    config.optimization = {
      minimize: false,
    };
    return config;
  },
};

export default nextConfig;
