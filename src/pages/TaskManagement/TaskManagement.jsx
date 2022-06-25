import React from "react";
import { statuses } from "../../data";
import "./../../index.css";

import { DropDragCustomized } from "../../components/DropDragCustomized/DropDragCustomized";
import { useTaskManagement } from "../../hooks/useTaskManagement";
import { WrapperStyled } from "./TaskManagement.styles";
const TaskManagement = () => {
  const [
    tasks,
    taskFunctions,
    // { updateTask, deleteTask, onDrop, moveItem, addTask },
  ] = useTaskManagement();
  return (
    <WrapperStyled>
      {statuses.map((s) => {
        return (
          <DropDragCustomized
            status={s}
            tasks={tasks}
            {...taskFunctions}
          />
        );
      })}
    </WrapperStyled>
  );
};

export default TaskManagement;
