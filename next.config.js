/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fullySpecified: true,
  },
  // See https://github.com/vercel/next.js/issues/41961
  // This solves the issue, but should be part of `fullySpecified`.
  // Also, this is Webpack only, not SWC solution.
  //
  // webpack: (webpackConfig) => {
  //   webpackConfig.resolve.extensionAlias = {
  //     ".js": [".ts", ".tsx", ".js", ".jsx"],
  //     ".mjs": [".mts", ".mjs"],
  //     ".cjs": [".cts", ".cjs"],
  //   };
  //   return webpackConfig;
  // },
};

export default nextConfig;
