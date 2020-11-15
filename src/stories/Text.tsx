import { css } from "@emotion/react";

import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { TagLink } from "./Links";

export interface NoteProps {
  content: string;
}

export const NoteInput: React.FC<NoteProps> = (props: NoteProps) => {
  return <textarea>{props.content}</textarea>;
};

export const NoteDisplay: React.FC<NoteProps> = (props: NoteProps) => {
  return <ReactMarkdown plugins={[gfm]}>{props.content}</ReactMarkdown>;
};
const TitleStyles = css({
  fontSize: 22,
});

export const Title: React.FC = ({ children }) => {
  return <div css={css(TitleStyles)}>{children}</div>;
};

export interface TagProps {
  tags: Array<string>;
}

export const Tags: React.FC<TagProps> = ({ tags }) => {
  const links = tags.map((tag) => <TagLink key={tag}>{tag}</TagLink>);
  return <div>{links}</div>;
};
