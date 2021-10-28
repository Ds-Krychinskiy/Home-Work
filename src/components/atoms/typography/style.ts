import styled from "styled-components";
import { Size } from ".";

export const H1 = styled.h1<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 42 : 27)}px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  margin-bottom: ${(props) => (props.size === "big" ? 24 : 48)}px;
`;

export const H2 = styled.h2<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 27 : 16)}px;
  font-style: normal;
  font-weight: bold;
  font-family: Montserrat;
`;

export const H3 = styled.h3<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 20 : 16)}px;
  font-style: normal;
  font-weight: ${(props) => (props.size === "big" ? 700 : 500)};
  font-family: Montserrat;
  margin-top: ${(props) => (props.size === "big" ? 24 : 4)}px;
  margin-left: 24px;
  margin-bottom: 4px;
`;

export const H4 = styled.h4<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 15 : 14)}px;
  font-style: normal;
  font-weight: ${(props) => (props.size === "big" ? 700 : 500)};
  font-family: Montserrat;
  margin-left: 12px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Body = styled.span<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 14 : 13)}px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: #5e93e7;
`;

export const Body2 = styled.div<{ size: Size }>`
  font-size: ${(props) => (props.size === "big" ? 16 : 13)}px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
`;
