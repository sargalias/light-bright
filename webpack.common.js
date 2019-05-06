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
        /* e.g. components: path.resolve(__dirname, 'src/components/') */
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
                resources: [
                  /* './src/abstracts/global/*.scss */
                  // These will be included in every file. Make sure you only globally include Sass things like Sass variables and mixins.
                  // E.g. if you include CSS custom properties, they'll be imported multiple times.
                ],
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
