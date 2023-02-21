import React from "react";

import { Link } from "./Links";

export default {
  title: "COMPONENTS/Links",
  component: Link,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Link {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  linkType: "simple",
  label: "Simple link",
  color: "blue",
};

export const Underline = Template.bind({});
Underline.args = {
  linkType: "underline",
  label: "Link with underline text",
  color: "rgb(17, 255, 0)",
};

export const Overline = Template.bind({});
Overline.args = {
  linkType: "overline",
  label: "Link with overline text",
  color: "rgb(222, 63, 27)",
};

export const withArrow = Template.bind({});
withArrow.args = {
  linkType: "arrow",
  label: "Link with arrow",
};
