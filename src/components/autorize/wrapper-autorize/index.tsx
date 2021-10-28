import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../atoms/button";
import Inputs from "../../atoms/input";
import Typography from "../../atoms/typography";
import { WrapperAutorize } from "./style";

const FormAutorize = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const ChanheSetUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const ChanheSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const disabled = !(userName.length > 2 && password.length > 2);
  const disabledInputName = userName.length <= 0 || userName.length >= 2;
  const disabledInputPassword = password.length <= 0 || password.length >= 2;
  const history = useHistory();

  const registration = () => {
    if (userName.length > 2 && password.length > 2) {
      history.push("/chat");
    }
  };

  return (
    <WrapperAutorize>
      <Typography variant="h1" size={"big"}>
        Wellcome to Chatty!
      </Typography>
      <Typography variant="h1" size={"small"}>
        Please, autorize yourself
      </Typography>
      <Inputs
        value={userName}
        onChange={ChanheSetUserName}
        name={"User name"}
        placeholder={"Input user name"}
        type={"text"}
        message={false}
        error={disabledInputName}
      />
      <Inputs
        value={password}
        onChange={ChanheSetPassword}
        name={"Password"}
        placeholder={"Input password"}
        type={"password"}
        message={false}
        error={disabledInputPassword}
      />
      <Button onClick={registration} disabled={disabled}>
        Log in
      </Button>
    </WrapperAutorize>
  );
};
export default FormAutorize;
