/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ["../src/components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    '@storybook/addon-react-native-web'
  ],
  framework: '@storybook/react-native-web-vite',
};
