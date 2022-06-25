import React, { useState } from "react";
import { statuses, STATUSES } from "../../data";
import "./../../index.css";

import { DropDragCustomized } from "../../components/DropDragCustomized/DropDragCustomized";
import { useTaskManagement } from "../../hooks/useTaskManagement";
import {
  InnerWrapperStyled,
  WrapperStyeld,
} from "./TaskManagement.styles";
const TaskManagement = () => {
  const [
    tasks,
    taskFunctions,
    // { updateTask, deleteTask, onDrop, moveItem, addTask },
  ] = useTaskManagement();
  return (
    <WrapperStyeld>
      <InnerWrapperStyled>
        {statuses.map((s) => {
          return (
            <DropDragCustomized
              status={s}
              tasks={tasks}
              {...taskFunctions}
            />
          );
        })}
      </InnerWrapperStyled>{" "}
    </WrapperStyeld>
  );
};

export default TaskManagement;
