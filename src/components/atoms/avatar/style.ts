import styled from "styled-components";

export const AvatarImg = styled.img<{ size: number }>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 50%;
`;
