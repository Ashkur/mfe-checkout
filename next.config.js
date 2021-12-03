module.exports = {
  reactStrictMode: true,
  basePath: "/checkout",
  async rewrites() {
    return [
      {
        source: "/checkout",
        destination: "https://checkout.nizen.com.br/checkout",
      },
      {
        source: "/checkout/:path*",
        destination: "https://checkout.nizen.com.br/checkout/:path*",
      },
    ];
  },
};
