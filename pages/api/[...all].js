const proxy = (req, res) => httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target:'https://www.nizen.com.br',
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
    pathRewrite: {
    '^/_next/':'https://checkout.nizen.com.br/_next/',
    },
});

export default proxy