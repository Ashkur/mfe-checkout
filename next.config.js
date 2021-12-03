module.exports = {
  reactStrictMode: true,
  basePath: "/checkout",
  async rewrites(props) {
    console.log(props);
    return {
      fallback: [
        {
          source: "/",
          destination: "https://checkout.nizen.com.br/checkout",
        },
      ],
    };
    // return [
    //   // {
    //   //   source: "/",
    //   //   destination: "/",
    //   // },
    //   {
    //     source: "https://nizen.com.br/checkout",
    //     destination: "https://checkout.nizen.com.br/checkout",
    //     basePath: false,
    //   },
    //   // {
    //   //   source: "/checkout/:path*",
    //   //   destination: "https://checkout.nizen.com.br/checkout/:path*",
    //   // },
    // ];
  },
};
