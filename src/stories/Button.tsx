// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/react";

import React from "react";
import { primaryColor } from "./colors";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const BUTTON_STYLE = css({
  fontFamily: "Nunito Sans",
  fontWeight: 700,
  border: 0,
  borderRadius: 10,
  cursor: "pointer",
  display: "inline-block",
  lineHeight: 1,
});

const BUTTON_SIZE = new Map<string, SerializedStyles>();
BUTTON_SIZE.set(
  "small",
  css({
    fontSize: 12,
    padding: "10px 16px",
  })
);
BUTTON_SIZE.set(
  "medium",
  css({
    fontSize: "14px",
    padding: "11px 20px",
  })
);
BUTTON_SIZE.set(
  "large",
  css({
    fontSize: "16px",
    padding: "12px 24px",
  })
);

const BUTTON_TYPES = new Map<string, SerializedStyles>();
BUTTON_TYPES.set(
  "primary",
  css({
    color: "white",
    backgroundColor: primaryColor,
  })
);
BUTTON_TYPES.set(
  "secondary",
  css({
    color: "#333",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
  })
);

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const localStyles = css(
    primary ? BUTTON_TYPES.get("primary") : BUTTON_TYPES.get("secondary"),
    {
      backgroundColor,
    }
  );
  return (
    <button
      type="button"
      css={css(BUTTON_STYLE, BUTTON_SIZE.get(size), localStyles)}
      {...props}
    >
      {label}
    </button>
  );
};
