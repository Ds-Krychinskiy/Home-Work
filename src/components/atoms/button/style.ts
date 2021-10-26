import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #5c98f1;
  width: 233px;
  height: 56px;
  border-radius: 8px;
  border: 0;
  transition: 0.35s;
  cursor: pointer;
  margin-top: 48px;
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
export const Text = styled.span`
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
`;
