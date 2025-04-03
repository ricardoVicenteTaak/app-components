import React from "react"; // 👈 Necessário para JSX funcionar!
import { View } from "react-native";
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => (
      <View
        style={{
          flex: 1,
          backgroundColor:
            parameters.noBackground === true ? undefined : "#FFF",
          padding: 8,
          justifyContent: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
