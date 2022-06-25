import React from "react";
import { useDrop } from "react-dnd";
import { statuses } from "../../data";
import { ITEM_TYPE } from "../../data/types";
import { DropInnerWrapper } from "../../pages/TaskManagement/TaskManagement.styles";

const DropWrapper = ({ refDrop, children }) => {
  return (
    <DropInnerWrapper ref={refDrop}>
      {React.cloneElement(children)}
    </DropInnerWrapper>
  );
};

export default DropWrapper;
