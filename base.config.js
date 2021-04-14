module.exports = {
  devServer: {
    host: 'localhost',
    port: 3000,
    disableHostCheck: true
  },
  configureWebpack: {
    performance: {
      hints: process.env.NODE_ENV === 'production' ? false : 'warning'
    }
  },
  parallel: !process.env.NODE_ENV === 'production'
}
