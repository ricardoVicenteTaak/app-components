/*
  Author: Ricardo Vicente
  Email: ricardo.vicente@taak.com.br
  Last modified: 2025-04-09 12:50
*/

import React from "react";
import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'destructive', 'default'],
      control: { type: "radio" }
    },
    title: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    hasIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    hideText: {
      control: 'boolean',
      defaultValue: false,
    },
    onPress: {
      action: "clicked",
    }
  },
};

const Template = (args) => {
  console.log('ARGS')
  console.log(args)
  return (
    <Button
    {...args}
  />
  
  );
};

export const Standard = Template.bind({});
Standard.args = {
  type: "primary",
  title: "Label",
  disabled: false,
  onPress: () => {},
  code: `<Button title="Label" type="brand" />`,
};
