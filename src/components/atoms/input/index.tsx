import React, { InputHTMLAttributes } from "react";
import { ErrorMessage, InputStyle, Label, StyledErrorIcon } from "./style";

interface InputsProps {
  name?: string;
  error?: string;
}

const Inputs: React.FC<InputsProps & InputHTMLAttributes<HTMLInputElement>> = ({
  name,
  error,
  ...props
}) => {
  return (
    <div>
      <Label>{name}</Label>
      <InputStyle hasError={!!error} {...props} />
      {error && <StyledErrorIcon />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
export default Inputs;
