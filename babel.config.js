module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@icons': './src/icons',
            '@styles': '.src/styles',
          },
        },
      ],
    ],
  };
};
