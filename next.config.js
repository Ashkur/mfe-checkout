const isProd = process.env.NODE_ENV === 'production';

const ASSET_PREFIX = isProd ? process.env.NEXT_PUBLIC_ASSET_PREFIX : ''

module.exports = {
  reactStrictMode: true,
  assetPrefix: ASSET_PREFIX,
  rewrites() {
    return [
      { source: '/_next/:path*', destination: `${ASSET_PREFIX}/_next/:path*` }
    ]
  }
};
