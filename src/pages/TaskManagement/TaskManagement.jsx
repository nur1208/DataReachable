import React, { useState } from "react";
import Item from "../../components/Item";
import DropWrapper from "../../components/DropWrapper";
import Col from "../../components/Col";
import { data, STATUSES, statuses } from "../../data";
import { GrAdd } from "react-icons/gr";

import "./../../index.css";
import {
  AddTaskBtn,
  AddTaskBtnWrapper,
} from "./TaskManagement.styles";
const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      // Generate Unique ID
      id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
      task: "solidity",
      status: STATUSES.PREPARE_TO_STUDY,
    },
  ]);

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

  return (
    <div className={"row"}>
      {statuses.map((s) => {
        return (
          <div key={s.id} className={"col-wrapper"}>
            <h2 className={"col-header"}>
              {s.status.toUpperCase()}
            </h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Col>
                {tasks
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => (
                    <Item
                      key={i.id}
                      item={i}
                      updateTask={updateTask}
                      index={idx}
                      moveItem={moveItem}
                      status={s}
                    />
                  ))}
                {s.status === STATUSES.PREPARE_TO_STUDY && (
                  <AddTaskBtnWrapper>
                    <AddTaskBtn
                      style={{
                        borderRadius: "50%",
                        padding: "5px",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        setTasks((currentPeople) => [
                          ...currentPeople,

                          {
                            // Generate Unique ID
                            id: `${Date.now()}${Math.floor(
                              Math.random() * 100
                            )}`,
                            task: "",
                            status: STATUSES.PREPARE_TO_STUDY,
                          },
                        ]);
                      }}
                    >
                      <GrAdd />
                    </AddTaskBtn>
                  </AddTaskBtnWrapper>
                )}
              </Col>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default TaskManagement;
