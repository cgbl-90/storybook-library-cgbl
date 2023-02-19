import React from "react";

import { Button } from "./Button";

export default {
  title: "COMPONENTS/Buttons",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    border: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: "primary",
  label: "Accept",
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: "secondary",
  label: "Confirm",
};

export const Success = Template.bind({});
Success.args = {
  btnType: "success",
  label: "OK",
};

export const Danger = Template.bind({});
Danger.args = {
  btnType: "danger",
  label: "Danger",
};

export const Warning = Template.bind({});
Warning.args = {
  btnType: "warning",
  label: "Caution!",
};

export const Info = Template.bind({});
Info.args = {
  btnType: "info",
  label: "Important",
};

export const Light = Template.bind({});
Light.args = {
  btnType: "light",
  label: "Attention",
};
