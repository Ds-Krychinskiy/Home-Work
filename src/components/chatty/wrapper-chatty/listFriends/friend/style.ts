import styled from "styled-components";

export const WrapperFriend = styled.div<{ isSelected: boolean }>`
  max-width: 362px;
  width: 100%;
  max-height: 72px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 20px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isSelected ? "#5C98F1" : "transparent"};
  .text {
    color: ${(props) => (props.isSelected ? "#FFFFFF" : null)};
    white-space: pre-wrap;
  }
`;

export const WrapperTypography = styled.div`
  display: flex;
  flex-direction: column;
`;
