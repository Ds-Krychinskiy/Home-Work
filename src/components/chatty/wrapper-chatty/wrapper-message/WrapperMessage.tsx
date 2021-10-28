import React from "react";
import ChatView from "./chatView/ChatView";
import { WrapperMessageStyle } from "./style";
import { IChat } from "../WrapperChatty";
import AllMessage from "../../../molecule/all-message";

interface IWrapperMessageProps {
  chat: IChat | null;
}

const WrapperMessage: React.FC<IWrapperMessageProps> = ({ chat }) => {
  console.log(chat);
  return (
    <WrapperMessageStyle>
      {chat?.id ? <ChatView chat={chat} /> : <AllMessage />}
    </WrapperMessageStyle>
  );
};
export default WrapperMessage;
