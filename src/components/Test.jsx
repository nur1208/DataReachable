import React, { useState } from "react";
import Item from "./Item/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, STATUSES, statuses } from "../data";
import { GrAdd } from "react-icons/gr";

import "./../index.css";
const Test = () => {
  const [items, setItems] = useState(data);
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
    const item = items[dragIndex];
    setTasks((prevState) => {
      const newItems = prevState.filter(
        (i, idx) => idx !== dragIndex
      );
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  const updateTask = (index, updateTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((value, itemIndex) => {
        if (index === itemIndex) {
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
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
                    </button>
                  </div>
                )}
              </Col>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
