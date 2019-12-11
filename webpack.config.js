const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BASE = path.join(path.resolve(), 'app', 'src');
const ENTRY = path.join(BASE, 'index.js');

const OUTPUT = path.join(path.resolve(), 'build');

const config = {
  // mode: 'development',
  mode: 'production',
  entry: ENTRY,
  output: {
    path: OUTPUT,
    filename: '[name].[hash:4].js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [ { loader: 'babel-loader' }],
      },
    ],
  },
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'runtime',
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 8080,
    }),
  ],
};

module.exports = config;
