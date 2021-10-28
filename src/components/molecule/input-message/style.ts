import styled from "styled-components";
import { ReactComponent as Clip } from "../../../images/clip.svg";
import { ReactComponent as Arrow } from "../../../images/arrow.svg";
import Inputs from "../../atoms/input";

export const InputMessageStyle = styled.div`
  bottom: 0;
  max-width: 1078px;
  width: 100%;
  max-height: 80px;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding-left: 29.29px;
  padding-right: 25px;
  box-sizing: border-box;
  padding-top: 0;
`;

export const ClipStyle = styled(Clip)`
  margin-top: 28.75px;
  cursor: pointer;
`;

export const ArrowStyle = styled(Arrow)`
  margin-top: 29.71px;
  cursor: pointer;
`;
export const StyledInput = styled(Inputs)`
  border: none !important;
`;
