import React, { InputHTMLAttributes } from "react";
import { ErrorMessage, InputStyle, Label, StyledErrorIcon } from "./style";

interface InputsProps {
  name?: string;
  error?: string | boolean;
  message: boolean;
}

const Inputs: React.FC<InputsProps & InputHTMLAttributes<HTMLInputElement>> = ({
  name,
  error,
  message,
  ...props
}) => {
  return (
    <div>
      {name ? <Label>{name}</Label> : null}
      <InputStyle hasError={!error} {...props} message={message}></InputStyle>
      {!error && <StyledErrorIcon />}
      {!error && <ErrorMessage>{"Something goes wrong"}</ErrorMessage>}
    </div>
  );
};
export default Inputs;
