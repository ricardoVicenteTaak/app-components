module.exports = async ({ config }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };

  const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

  if (fileLoaderRule) {
    config.module.rules.splice(config.module.rules.indexOf(fileLoaderRule), 1);
  }

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
    return config;
  };