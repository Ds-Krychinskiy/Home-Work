import React from "react";
import styled from "styled-components";

type Size = "big" | "small";

interface ITypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "body1" | "body2";
  size: Size;
  children: string;
  className?: string;
}

const H1 = styled.h1<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 42 : 27)}px;
  font-family: Montserrat;
`;

const H2 = styled.h2<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 27 : 16)}px;
  font-family: Montserrat;
`;

const H3 = styled.h3<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 20 : 15)}px;
  font-family: Montserrat;
`;

const H4 = styled.h4<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 15 : 13)}px;
  font-family: Montserrat;
`;

const Body1 = styled.div<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 16 : 14)}px;
  font-family: Montserrat;
`;

const Body2 = styled.div<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 14 : 13)}px;
  font-family: Montserrat;
`;

const Typography: React.FC<ITypographyProps> = ({
  variant,
  size,
  children,
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
    case "body1":
      return (
        <Body1 className={className} size={size}>
          {children}
        </Body1>
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
