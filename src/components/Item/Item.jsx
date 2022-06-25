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
import { CloseBtn, InputTaskWrapper } from "./Item.styles";

const Item = ({
  updateTask,
  item,
  index,
  moveItem,
  status,
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
      <div
        ref={dragRef}
        style={{ opacity: isDragging ? 0 : 1 }}
        className={"item"}
      >
        <div key={item.id} style={{ position: "relative" }}>
          {isHoverd && (
            <CloseBtn onClick={() => deleteTask(item.id)}>
              x
            </CloseBtn>
          )}
          <InputTaskWrapper>
            <input
              className="task-input"
              onChange={(e) => {
                const task = e.target.value;
                updateTask(item.id, task);
              }}
              value={item.task}
              placeholder="task"
            />
          </InputTaskWrapper>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
