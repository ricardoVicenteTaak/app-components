module.exports = {
  framework: "@storybook/react-webpack5",
  stories: ["../src/components/**/*.stories.@(ts|tsx|js|jsx)"],
  features: {
    buildStoriesJson: true,
  },
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-svg": "react-native-svg-web",
      
    };

    config.module.rules.push({
      test: /\.cjs$/,
      type: "javascript/auto",
    });

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: [
            "@babel/plugin-transform-runtime",
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-proposal-private-methods", { loose: true }],
            ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
            "react-native-reanimated/plugin",
          ],
        },
      },
    });

    config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");

    return config;
  },
};
