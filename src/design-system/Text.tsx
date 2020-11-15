import { css } from "@emotion/react";

import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { TagLink } from "./Links";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/mode-markdown";

export interface NoteProps {
  content: string;
}

interface InputProps {
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onDone: (note: string) => void;
}

export const NoteInput: React.FC<NoteProps & InputProps> = (props) => {
  const [note, setNote] = useState(props.content);

  return (
    <AceEditor
      name="blah2"
      mode="markdown"
      theme="solarized_light"
      fontSize={14}
      showPrintMargin={false}
      showGutter={false}
      highlightActiveLine={false}
      value={note}
      focus={true}
      onChange={(change) => {
        setNote(change);
      }}
      commands={[
        {
          name: "escape",
          bindKey: { win: "esc", mac: "esc" },
          exec: () => {
            props.onDone(note);
          },
        },
      ]}
    />
  );
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
