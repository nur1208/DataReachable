import React from "react";
import { Link } from "react-router-dom";
import { MainLadingWrapper, StartApp } from "./Landing.styles";
export const Landing = () => {
  return (
    <MainLadingWrapper>
      <StartApp to="task">Start app</StartApp>
    </MainLadingWrapper>
  );
};
