import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { MainLadingWrapper } from "../pages/Landing/Landing.styles";
import colors from "../styles/colors";
import { useNotification } from "./Notification";

export const Test = ({ type, color }) => {
  const dispatch = useNotification();

  useEffect(() => {
    dispatch({
      type: "success",
      message: `Nice! You are going to !!`,
      title: "Booking Successfully",
      position: "topL",
      iconColor: colors.green,
    });
  }, []);

  return (
    <MainLadingWrapper>
      <ReactLoading
        type={type}
        color={color}
        height={300}
        width={200}
      />
    </MainLadingWrapper>
  );
};
