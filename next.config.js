module.exports = {
  reactStrictMode: true,
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
