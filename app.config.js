/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 10:51
*/

export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  android: {
    ...config.android,
    newArchEnabled: false,
  },
  ios: {
    ...config.ios,
    newArchEnabled: false,
  },
});
