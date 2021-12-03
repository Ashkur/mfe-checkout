module.exports = {
  reactStrictMode: true,
  basePath: "/checkout",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/",
      },
      // {
      //   source: "/",
      //   destination: "https://checkout.nizen.com.br",
      // },
      // {
      //   source: "/checkout/:path*",
      //   destination: "https://checkout.nizen.com.br/checkout/:path*",
      // },
    ];
  },
};
