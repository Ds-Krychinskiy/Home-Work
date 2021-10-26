import React from "react";
import { H1, H2, H3, H4 } from "./style";

export type Size = "big" | "small";

interface TypographyProps {
  children: string;
  size: Size;
  variant: "h1" | "h2" | "h3" | "h4";
}

const Typography: React.FC<TypographyProps> = ({ children, size, variant }) => {
  switch (variant) {
    case "h1":
      return <H1 size={size}>{children}</H1>;
    case "h2":
      return <H2 size={size}>{children}</H2>;
    case "h3":
      return <H3 size={size}>{children}</H3>;
    case "h4":
      return <H4 size={size}>{children}</H4>;
  }
};
export default Typography;
