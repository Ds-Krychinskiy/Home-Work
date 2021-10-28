import React from "react";
import Typography from "../../../../atoms/typography";
import { IChat } from "../../WrapperChatty";
import { Wrappertitle } from "./style";

interface ITitleChattyProps {
  chat: IChat | null;
}

const TitleChatty: React.FC<ITitleChattyProps> = ({ chat }) => {
  return (
    <Wrappertitle>
      <Typography size={"big"} variant={"h3"}>
        {chat?.name}
      </Typography>
      <Typography size={"small"} variant={"h3"}>
        {chat?.isOnline ? "Online" : `Last see ${chat?.lastSeen} minutes ago`}
      </Typography>
    </Wrappertitle>
  );
};
export default TitleChatty;
