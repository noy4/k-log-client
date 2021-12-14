const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/k-log-client' : ''

module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  env: {
    basePath,
  },
}
