import React from "react";
import { statuses } from "../../data";
import "./../../index.css";

import { DropDragCustomized } from "../../components/DropDragCustomized/DropDragCustomized";
import { useTaskManagement } from "../../hooks/useTaskManagement";
const TaskManagement = () => {
  const [
    tasks,
    taskFunctions,
    // { updateTask, deleteTask, onDrop, moveItem, addTask },
  ] = useTaskManagement();
  return (
    <div className={"row"}>
      {statuses.map((s) => {
        return (
          <DropDragCustomized
            status={s}
            tasks={tasks}
            {...taskFunctions}
          />
        );
      })}
    </div>
  );
};

export default TaskManagement;
