module.exports = api => {
  const presets = ['@babel/preset-react'];
  const plugins = [];

  const isTest = api.env('test');
  if (isTest) {
    presets.push('@babel/preset-env');
    plugins.push('dynamic-import-node'); // eslint-disable-line no-secrets/no-secrets
  }

  return {
    presets,
    plugins,
  };
};
