import React from "react";
import { LoaderIcon } from "./style";

const Loader = () => {
  return (
    <LoaderIcon>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderIcon>
  );
};
export default Loader;
