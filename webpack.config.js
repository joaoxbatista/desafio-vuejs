const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

module.exports = {
  entry: ['babel-polyfill', join(__dirname, 'src', 'app.js')],
  output: {
    path: join(__dirname, 'dist', 'build'),
    filename: 'app.min.js',
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
              additionalData: `
                @import '@/scss/app.scss';
                @import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap';
              `,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      template: join(__dirname, 'public', 'index.html'),
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
