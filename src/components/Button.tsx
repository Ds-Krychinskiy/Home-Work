import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: #5c98f1;
  width: 233px;
  height: 56px;
  border-radius: 8px;
  border: 0;
  transition: 0.35s;
  cursor: pointer;
  :hover {
    background-color: #4583de;
  }
  :active {
    background-color: #2c6ac7;
  }
  :disabled {
    background-color: #d1d1d1;
    cursor: default;
  }
`;

const Text = styled.span`
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
`;

interface IButtonProps {
  className?: string;
}
const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps> =
  ({ ...props }) => {
    return (
      <ButtonWrapper {...props}>
        <Text>Log in</Text>
      </ButtonWrapper>
    );
  };
export default Button;
