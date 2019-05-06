const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = env => {
  if (env.prod === undefined) {
    env.prod = true;
  }

  const sourceMap = !env.prod;

  return {
    entry: './src/index.jsx',
    output: {
      filename: 'main.bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        utilities: path.resolve(__dirname, 'src/utilities/'),
        base: path.resolve(__dirname, 'src/base/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'eslint-loader',
              options: { emitWarning: !env.prod },
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: env.prod ? MiniCssExtractPlugin.loader : 'style-loader',
              options: {
                sourceMap,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap,
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./src/abstracts/**/*'],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new StyleLintPlugin({
        emitErrors: env.prod,
      }),
    ],
  };
};
