import React from "react";
import Typography from "../../atoms/typography";
import { Wrappertitle } from "./style";

const TitleChatty = () => {
  return (
    <Wrappertitle>
      <Typography size={"big"} variant={"h3"}>
        Marina Joe
      </Typography>
      <Typography size={"small"} variant={"h3"}>
        Last seen 3 minutes ago
      </Typography>
    </Wrappertitle>
  );
};
export default TitleChatty;
