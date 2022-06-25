import React from "react";
import { STATUSES } from "../data";
import { useHover } from "../hooks/useHover";
import {
  AddTaskBtn,
  AddTaskBtnWrapper,
  DropMainWrapper,
} from "../pages/TaskManagement/TaskManagement.styles";
import Col from "./Col";
import DropWrapper from "./DropWrapper";
import Item from "./Item/Item";
import { GrAdd } from "react-icons/gr";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../data/types";

export const DropDragCol = ({
  s,
  onDrop,
  tasks,
  updateTask,
  moveItem,
  setTasks,
  deleteTask,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    // canDrop: (item, monitor) => {
    //   const itemIndex = statuses.findIndex(
    //     (si) => si.status === item.status
    //   );
    //   const statusIndex = statuses.findIndex(
    //     (si) => si.status === status
    //   );
    //   return [itemIndex + 1, itemIndex - 1, itemIndex].includes(
    //     statusIndex
    //   );
    // },
    drop: (item, monitor) => {
      onDrop(item, monitor, s.status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <DropMainWrapper key={s.id} isOver={isOver}>
      {/* <div key={s.id} className={"col-wrapper"}> */}
      <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
      <DropWrapper refDrop={drop} status={s.status}>
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
                deleteTask={deleteTask}
              />
            ))}
          {s.status === STATUSES.PREPARE_TO_STUDY && (
            <AddTaskBtnWrapper>
              <AddTaskBtn
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
      {/* </div> */}
    </DropMainWrapper>
  );
};
