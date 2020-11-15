import React from "react";
import { Meta, Story } from "@storybook/react/";
import { Card, CardProps } from "./Card";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardContainer = Template.bind({});
CardContainer.args = {
  id: "202011142104",
  title: "Card Title",
  note: "This is the *note*.\n_wow_ is a `note`",
  tags: ["markdown", "tests"],
};
