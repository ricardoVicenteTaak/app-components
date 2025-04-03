import React from "react";
import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["brand", "outline", "destructive"],
      control: { type: "radio" },
    },
    title: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    backgroundColor: {
      control: "color",
    },
    fontSize: {
      control: { type: "number", min: 10, max: 30, step: 1 },
    },
    variant: {
      options: ["solid", "ghost", "link"],
      control: { type: "select" },
    },
    icon: {
      control: "text",
    },
    width: {
      control: { type: "range", min: 0, max: 50, step: 5 },
    },
    onPress: {
      action: "clicked",
    },
    code: {
      control: "text",
    },
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
  type: "brand",
  title: "Confirm",
  disabled: false,
  backgroundColor: "#007bff",
  fontSize: 16,
  variant: "solid",
  icon: "",
  width: 10,
  onPress: () => {},
  code: `<Button title="Confirm" type="brand" />`,
};
