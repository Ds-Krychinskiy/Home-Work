import React, { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Typography from "./components/Typography";

import styled from "styled-components";

const WrapperInput = styled.div`
  margin-top: 50px;
  display: inline-block;
`;

const StyledInput = styled(Input)`
  margin-top: 50px;
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
  margin-right: 15px;
`;

const App = () => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <StyledButton />
        <Button disabled={true} />
      </div>
      <WrapperInput>
        <Input value={value} onChange={onChange} />
        <StyledInput
          value={value}
          onChange={onChange}
          error={"Something goes wrong"}
        />
      </WrapperInput>
      <div>
        <Typography size={"big"} variant={"h1"}>
          {value || "Header1"}
        </Typography>
        <Typography size={"small"} variant={"h1"}>
          {value || "Header1"}
        </Typography>
        <Typography size={"big"} variant={"h2"}>
          {value || "Header2"}
        </Typography>
        <Typography size={"small"} variant={"h2"}>
          {value || "Header2"}
        </Typography>
        <Typography size={"big"} variant={"h3"}>
          {value || "Header3"}
        </Typography>
        <Typography size={"small"} variant={"h3"}>
          {value || "Header3"}
        </Typography>
        <Typography size={"big"} variant={"h4"}>
          {value || "Header4"}
        </Typography>
        <Typography size={"small"} variant={"h4"}>
          {value || "Header4"}
        </Typography>
        <Typography size={"big"} variant={"body1"}>
          {value || "Text1"}
        </Typography>
        <Typography size={"small"} variant={"body1"}>
          {value || "Text1"}
        </Typography>
        <Typography size={"big"} variant={"body2"}>
          {value || "Text2"}
        </Typography>
        <Typography size={"small"} variant={"body2"}>
          {value || "Text2"}
        </Typography>
      </div>
    </div>
  );
};

export default App;
