module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "https://www.nizen.com.br/checkout",
        destination: "https://checkout.nizen.com.br/",
      },
    ];
  },
};
