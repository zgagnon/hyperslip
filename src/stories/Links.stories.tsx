import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { TagLink } from "./Links";

export default {
  title: "Example/Link",
  component: TagLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => <TagLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "tag-content",
};