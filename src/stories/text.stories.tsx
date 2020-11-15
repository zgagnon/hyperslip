import React from "react";
import { Meta } from "@storybook/react";
import {
  NoteDisplay,
  NoteInput,
  NoteProps,
  TagProps,
  Tags,
  TextProps,
  Title,
} from "../design-system/Text";

export default {
  title: "Example/Text Input",
} as Meta;

export const CardTitle = (args: TextProps): React.ReactElement => {
  return <Title {...args} />;
};
CardTitle.args = {
  children: "Here is a card title!",
};

export const CardNoteInput = (args: NoteProps): React.ReactElement => {
  return <NoteInput {...args} />;
};
CardNoteInput.args = {
  content: "Example note content",
};

export const CardNoteDisplay = (args: NoteProps): React.ReactElement => {
  return <NoteDisplay {...args} />;
};
CardNoteDisplay.args = {
  content:
    "# Example\n\n- Some *markdown* text\n- _delightful_\n1. ~~boring~~\n1. `code`",
};

export const CardTags = (args: TagProps): React.ReactElement => {
  return <Tags {...args} />;
};
CardTags.args = {
  tags: ["examples", "components"],
};
