const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => ({
  entry: './src/index.jsx',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
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
    ],
  },
});
