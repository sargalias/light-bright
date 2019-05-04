module.exports = api => {
  const presets = ['@babel/preset-react'];

  const isTest = api.env('test');
  if (isTest) {
    presets.push('@babel/preset-env');
  }

  return {
    presets,
  };
};
