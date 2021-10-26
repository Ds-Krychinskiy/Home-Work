import React from "react";
import Message from "../message/Message";
import TitleChatty from "../titelchatty/TitleChatty";
import { WrapperMessageStyle } from "./style";

const WrapperMessage = () => {
  return (
    <WrapperMessageStyle>
      <TitleChatty />
      <Message />
    </WrapperMessageStyle>
  );
};
export default WrapperMessage;
