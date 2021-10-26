import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../images/ErrorIcon.svg";

export const InputStyle = styled.input<{ hasError: boolean }>`
  padding-left: 16px;
  outline: none;
  border: ${(props) =>
    props.hasError ? "1px solid #FB6262 !important" : "1px solid #b3cdf8"};
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #b3cdf8;
  width: 354px;
  height: 56px;
  margin-bottom: 25px;
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

export const Label = styled.label`
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
export const StyledErrorIcon = styled(ErrorIcon)`
  position: absolute;
  top: 10px;
  right: 16px;
`;

export const ErrorMessage = styled.span`
  color: #fb6262;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
`;
