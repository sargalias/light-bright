const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const env = { prod: true };

module.exports = merge(common(env), {
  mode: 'production',
});
