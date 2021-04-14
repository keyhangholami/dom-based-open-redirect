const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');

module.exports =  merge(baseConfig, {
  css: {
    extract: process.env.NODE_ENV === 'production',
    sourceMap: true
  },
  configureWebpack: {
    entry: './src/client-entry.js',
    optimization: {
      splitChunks: undefined
    },
    plugins: [
      new StatsPlugin('stats.json', {
        chunkModules: true
      }),
      new SWPrecachePlugin({
        cacheId: 'vue-hn',
        filename: 'service-worker.js',
        dontCacheBustUrlsMatching: /./,
        staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
      }),
      new VueSSRClientPlugin()
    ]
  }
});
