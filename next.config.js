const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_ASSET_PREFIX : '',
  async rewrites() {
    return {
      fallback: [
        {
          source: "/",
          destination: "https://nizen.com.br/",
        },
        {
          source: "/:path",
          destination: "https://nizen.com.br/:path",
        },
        {
          source: "/about",
          destination: "https://nizen.com.br/about",
        },
        {
          source: "/about/:path",
          destination: "https://nizen.com.br/about/:path",
        },
      ],
    };
  },
};
