import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { STATUSES } from "../data";
import { ITEM_TYPE } from "../data/types";

const Item = ({ updateTask, item, index, moveItem, status }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      // moving item down
      if (
        dragIndex < hoverIndex &&
        hoverClientY < hoverMiddleY
      ) {
        return;
      }

      // moving item up

      if (
        dragIndex > hoverIndex &&
        hoverClientY > hoverMiddleY
      ) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <Fragment>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className={"item"}
      >
        <div key={item.id}>
          <input
            className="task-input"
            onChange={(e) => {
              const task = e.target.value;
              updateTask(item.id, task);
              //   setTasks((currentTasks) =>
              //     currentTasks.map((value, itemIndex) => {
              //       if (index === itemIndex) {
              //         // debugger;
              //         tasks[itemIndex].task = task;
              //         return value;
              //       }
              //       return value;
              //     })
              //   );
            }}
            value={item.task}
            placeholder="task"
          />
          {/* <button
              onClick={() => {
                setTasks((currentPeople) =>
                  currentPeople.filter((x) => x.id !== p.id)
                );
              }}
            >
              x
            </button> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
