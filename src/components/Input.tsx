import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../icons/errorIcon.svg";

const WrapperForm = styled.div`
  width: min-content;
`;

const Wrapper = styled.div`
  width: min-content;
  position: relative;
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  padding-left: 16px;
  outline: none;
  border: ${(props) =>
    props.hasError ? "1px solid #FB6262 !important" : "1px solid #b3cdf8"};
  box-sizing: border-box;
  border-radius: 8px;
  width: 354px;
  height: 56px;
  ::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #9f9f9f;
  }
  :focus {
    border: 1px solid #5c98f1;
  }
`;

const Label = styled.label`
  width: 100%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #333333;
  margin-bottom: 4px;
`;

const StyledErrorIcon = styled(ErrorIcon)`
  position: absolute;
  top: 19px;
  right: 16px;
`;

const ErrorMessage = styled.span`
  color: #fb6262;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

interface IInputProps {
  className?: string;
  error?: string;
}

const Input: React.FC<IInputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  error,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <WrapperForm>
        <Label>User name</Label>
        <Wrapper>
          <StyledInput
            {...props}
            hasError={!!error}
            placeholder="Input user name"
            type="text"
          />
          {error && <StyledErrorIcon />}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Wrapper>
      </WrapperForm>
    </div>
  );
};
export default Input;
