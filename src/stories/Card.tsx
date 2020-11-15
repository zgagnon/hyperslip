// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import facepaint from "facepaint";
import { darkAccent, primaryColor } from "./colors";
import { NoteDisplay, Tags, Title } from "./Text";

export interface CardProps {
  title: string;
  note: string;
  tags?: Array<string>;
  id: string;
}

const mq = facepaint([
  "@media screen and (min-width: 400px)",
  "@media screen and (min-width: 500px)",
]);

const CardStyle = css(
  mq({
    borderRadius: 10,
    border: `2px solid ${darkAccent}`,
    width: [280, 380, 500],
    height: [500, 380, 300],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 8,
  })
);

const HrStyle = css({ marginBottom: 0, backgroundColor: darkAccent });
const CardTitleSection: React.FC<{ id: string }> = ({ children, id }) => {
  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title>{children}</Title>
        <span css={{ color: primaryColor }}>{id}</span>
      </div>
      <hr css={HrStyle} />
    </div>
  );
};
const CardTagSection: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div>
      <hr css={HrStyle} />
      <Tags tags={tags} />
    </div>
  );
};
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div css={CardStyle}>
      <CardTitleSection id={props.id}>{props.title}</CardTitleSection>
      <NoteDisplay content={props.note} />
      <CardTagSection tags={props.tags ?? []} />
    </div>
  );
};
