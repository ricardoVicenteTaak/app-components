export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  android: {
    ...config.android,
    newArchEnabled: false, // 🚨 Desativa a Nova Arquitetura no Android
  },
  ios: {
    ...config.ios,
    newArchEnabled: false, // 🚨 Desativa a Nova Arquitetura no iOS
  },
});
