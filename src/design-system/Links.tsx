// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";

const TagLinkStyles = css({
  marginLeft: 4,
  marginRight: 4,
  cursor: "pointer",
});
export const TagLink: React.FC = ({ children }) => {
  return <a css={TagLinkStyles}>#{children}</a>;
};
