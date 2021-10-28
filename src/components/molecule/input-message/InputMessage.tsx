import { display } from "@mui/system";
import React from "react";

import { ArrowStyle, ClipStyle, InputMessageStyle, StyledInput } from "./style";

const InputMessage = () => {
  return (
    <InputMessageStyle>
    <label htmlFor="file-uploader">
      <ClipStyle />
      </label>
      <input type="file" id="file-uploader" style={{display: "none"}}/>
      <StyledInput
        placeholder={"Write something..."}
        error={true}
        message={true}
      ></StyledInput>
      <ArrowStyle />

    </InputMessageStyle>
  );
};

export default InputMessage;
