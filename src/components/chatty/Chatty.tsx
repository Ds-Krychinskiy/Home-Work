import React from "react";
import HeaderChatty from "./headerchatty/HeaderChatty";

import { ChattyStyle } from "./style";
import WrapperChatty from "./wrapper-chatty/WrapperChatty";

const Chatty = () => {
  return (
    <ChattyStyle>
      <HeaderChatty />
      <WrapperChatty />
    </ChattyStyle>
  );
};
export default Chatty;
