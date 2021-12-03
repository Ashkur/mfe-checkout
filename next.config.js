module.exports = {
  reactStrictMode: true,
  basePath: "/checkout",
  async rewrites() {
    return [
      // {
      //   source: "/:path*",
      //   destination: `/:path*`,
      // },
      {
        source: "/",
        destination: "https://checkout.nizen.com.br",
      },
      // {
      //   source: "/checkout/:path*",
      //   destination: "https://checkout.nizen.com.br/checkout/:path*",
      // },
    ];
  },
};
