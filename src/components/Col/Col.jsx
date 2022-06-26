import React from "react";
import { ColStyled } from "./Col.styles";

const Col = ({ children }) => {
  return <ColStyled>{children}</ColStyled>;
};

export default Col;
