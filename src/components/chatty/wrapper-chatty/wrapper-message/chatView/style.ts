import styled from "styled-components";
import { IChat } from "../../WrapperChatty";

export const MessageStyle = styled.div<{ chat: IChat | null }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eff5ff;
  flex-grow: 3;
`;
