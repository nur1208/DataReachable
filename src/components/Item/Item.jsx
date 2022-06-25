import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
} from "react";
import { useDrag, useDrop } from "react-dnd";
import { STATUSES } from "../../data";
import { ITEM_TYPE } from "../../data/types";
import { useHover } from "../../hooks/useHover";
import {
  CloseBtnStyeld,
  InputTaskWrapperStyled,
  ItemWrapperStyled,
} from "./Item.styles";

const Item = ({
  updateTask,
  item,
  index,
  moveItem,
  status,
  setCurrentTasksPerStatus,
  deleteTask,
}) => {
  const dragRef = useRef(null);
  const [hoverRef, isHoverd] = useHover();
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!dragRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect =
        dragRef.current.getBoundingClientRect();
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

  useEffect(() => {
    hoverRef.current = dragRef.current;
  }, [dragRef.current]);

  drag(drop(dragRef));

  return (
    <Fragment>
      <ItemWrapperStyled ref={dragRef} isDragging={isDragging}>
        <div key={item.id} style={{ position: "relative" }}>
          {isHoverd && (
            <CloseBtnStyeld onClick={() => deleteTask(item.id)}>
              x
            </CloseBtnStyeld>
          )}
          <InputTaskWrapperStyled>
            <input
              onChange={(e) => {
                const task = e.target.value;
                updateTask(item.id, task, index);
              }}
              value={item.task}
              placeholder="task"
            />
          </InputTaskWrapperStyled>
        </div>
      </ItemWrapperStyled>
    </Fragment>
  );
};

export default Item;
