import React from "react";
import ReactLoading from "react-loading";
import { MainLadingWrapper } from "../pages/Landing/Landing.styles";

export const Loading = ({ type, color }) => (
  <MainLadingWrapper>
    <ReactLoading
      type={type}
      color={color}
      height={300}
      width={200}
    />
  </MainLadingWrapper>
);
