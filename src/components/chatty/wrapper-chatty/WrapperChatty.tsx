import React from "react";
import { WrapperChattyStyle } from "./style";
import ListFriends from "./../listFriends/ListFriends";
import WrapperMessage from "../wrapper-message/WrapperMessage";

const WrapperChatty = () => {
  return (
    <WrapperChattyStyle>
      <ListFriends />
      <WrapperMessage />
    </WrapperChattyStyle>
  );
};

export default WrapperChatty;
