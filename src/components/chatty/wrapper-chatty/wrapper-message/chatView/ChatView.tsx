import React from "react";
import MessageList from "../../../../molecule/message";
import InputMessage from "../../../../molecule/input-message/InputMessage";
import { IChat } from "../../WrapperChatty";
import TitleChatty from "../titelchatty/TitleChatty";
import { MessageStyle } from "./style";

export interface IChatViewProps {
  chat: IChat;
}

const ChatView: React.FC<IChatViewProps> = ({ chat }) => {
  return (
    <MessageStyle chat={chat}>
      <TitleChatty chat={chat} />
      <MessageList chat={chat} />
      <InputMessage />
    </MessageStyle>
  );
};
export default ChatView;
