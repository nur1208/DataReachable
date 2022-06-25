import React, { useEffect, useState } from "react";
import { STATUSES } from "../../data";

import Col from "../Col/Col";
import DropWrapper from "../DropWrapper/DropWrapper";
import Item from "../Item/Item";
import { GrAdd } from "react-icons/gr";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../data/types";
import {
  AddTaskBtnStyeld,
  AddTaskBtnWrapperStyeld,
  ColHeaderStyeld,
  DropMainWrapperStyeld,
} from "./DropDragCustomized.styles";

export const DropDragCustomized = ({
  status,
  onDrop,
  tasks,
  updateTask,
  moveItem,
  addTask,
  deleteTask,
  setCurrentTasksPerStatus,
  currentTasksPerStatus,
}) => {
  const [numOfItems, setNumOfItems] = useState(0);
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      onDrop(item, monitor, status.status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  //
  useEffect(() => {
    setNumOfItems(
      tasks.filter((i) => i.status === status.status).length
    );
  }, [tasks]);

  return (
    <DropMainWrapperStyeld
      key={status.id}
      isOver={isOver}
      numOfItems={numOfItems}
    >
      <ColHeaderStyeld>
        {status.status.toUpperCase()}
      </ColHeaderStyeld>
      <DropWrapper refDrop={drop} status={status.status}>
        <Col>
          {tasks
            .filter((i) => i.status === status.status)
            .map((i, idx) => (
              <Item
                key={i.id}
                item={i}
                updateTask={updateTask}
                index={idx}
                moveItem={moveItem}
                status={status}
                deleteTask={deleteTask}
                setCurrentTasksPerStatus={
                  setCurrentTasksPerStatus
                }
              />
            ))}
          {status.status === STATUSES.PREPARE_TO_STUDY && (
            <AddTaskBtnWrapperStyeld>
              <AddTaskBtnStyeld onClick={addTask}>
                <GrAdd />
              </AddTaskBtnStyeld>
            </AddTaskBtnWrapperStyeld>
          )}
        </Col>
      </DropWrapper>
    </DropMainWrapperStyeld>
  );
};
