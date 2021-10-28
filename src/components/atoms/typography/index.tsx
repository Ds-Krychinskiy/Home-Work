import React from "react";
import { Body, Body2, H1, H2, H3, H4 } from "./style";

export type Size = "big" | "small";

interface TypographyProps {
  children?: string | JSX.Element;
  size: Size;
  variant: "h1" | "h2" | "h3" | "h4" | "body" | "body2";
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size,
  variant,
  className,
}) => {
  switch (variant) {
    case "h1":
      return (
        <H1 className={className} size={size}>
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2 className={className} size={size}>
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3 className={className} size={size}>
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4 className={className} size={size}>
          {children}
        </H4>
      );
    case "body":
      return (
        <Body className={className} size={size}>
          {children}
        </Body>
      );
    case "body2":
      return (
        <Body2 className={className} size={size}>
          {children}
        </Body2>
      );
  }
};
export default Typography;
