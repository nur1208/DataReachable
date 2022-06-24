import React from "react";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Link to="task" className="start-btn">
        Start app
      </Link>
    </div>
  );
};
