import React from "react";
import Typography from "../../atoms/typography";
import { AllMessageStyle } from "./style";

const AllMessage = () => {
  return (
    <AllMessageStyle>
      <Typography size={"big"} variant={"h4"}>
        Select a chat to stary messaging
      </Typography>
    </AllMessageStyle>
  );
};
export default AllMessage;
