import React, { useState } from "react";
import Item from "../../components/Item/Item";
import DropWrapper from "../../components/DropWrapper";
import Col from "../../components/Col";
import { data, STATUSES, statuses } from "../../data";
import { GrAdd } from "react-icons/gr";

import "./../../index.css";
import {
  AddTaskBtn,
  AddTaskBtnWrapper,
  DropMainWrapper,
} from "./TaskManagement.styles";
import { useHover } from "../../hooks/useHover";
import { DropDragCol } from "../../components/DropDragCol";
const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      // Generate Unique ID
      id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
      task: "solidity",
      status: STATUSES.PREPARE_TO_STUDY,
    },
  ]);

  const [hoverRef, isHovered] = useHover();
  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setTasks((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = tasks[dragIndex];
    setTasks((prevState) => {
      const newItems = prevState.filter(
        (i, idx) => idx !== dragIndex
      );
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  const updateTask = (itemId, updateTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((value, itemIndex) => {
        if (itemId === value.id) {
          // debugger;
          tasks[itemIndex].task = updateTask;
          return value;
        }
        return value;
      })
    );
  };

  const deleteTask = (itemId) => {
    setTasks((currentTask) =>
      currentTask.filter((x) => x.id !== itemId)
    );
  };

  return (
    <div className={"row"}>
      {statuses.map((s) => {
        return (
          <DropDragCol
            s={s}
            onDrop={onDrop}
            tasks={tasks}
            updateTask={updateTask}
            moveItem={moveItem}
            setTasks={setTasks}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default TaskManagement;
