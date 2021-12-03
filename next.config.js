module.exports = {
  reactStrictMode: true,
  basePath: "/checkout",
  async rewrites() {
    return [
      // {
      //   source: "/",
      //   destination: "/",
      // },
      {
        source: "/checkout",
        destination: "https://checkout.nizen.com.br/checkout",
        basePath: false,
      },
      // {
      //   source: "/checkout/:path*",
      //   destination: "https://checkout.nizen.com.br/checkout/:path*",
      // },
    ];
  },
};
