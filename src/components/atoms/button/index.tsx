import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyle, Text } from "./style";

interface ButtonProps {
  disabled: boolean;
}

const Button: React.FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, ...props }) => {
    return (
      <ButtonStyle {...props}>
        <Text>{children}</Text>
      </ButtonStyle>
    );
  };
export default Button;
