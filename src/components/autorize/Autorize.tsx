import React from "react";

import Pattern from "./loginImage";
import { AutorizeStyle } from "./style";
import FormAutorize from "./wrapper-autorize";

const Autorize = () => {
  return (
    <AutorizeStyle>
      <FormAutorize />
      <Pattern />
    </AutorizeStyle>
  );
};
export default Autorize;
