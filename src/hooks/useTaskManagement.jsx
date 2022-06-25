import { useEffect, useState } from "react";
import { statuses, STATUSES } from "../data";
import TaskEndpoints from "../services/Task";

export const useTaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      // Generate Unique ID
      id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
      task: "solidity",
      status: STATUSES.PREPARE_TO_STUDY,
    },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { data } = await TaskEndpoints.get();
      console.log({ data });
      setLoading(false);
      setTasks(data.articles);
    })();
  }, []);

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

  const updateTask = (itemId, updatedTask, index) => {
    setTasks((currentTasks) =>
      currentTasks.map((value, itemIndex) => {
        if (itemId === value.id) {
          // debugger;
          tasks[itemIndex].task = updatedTask;
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

  const addTask = () => {
    setTasks((currentTask) => [
      ...currentTask,

      {
        // Generate Unique ID
        id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
        task: "",
        status: STATUSES.PREPARE_TO_STUDY,
      },
    ]);
  };
  return [
    {tasks, loading},
    { updateTask, deleteTask, onDrop, moveItem, addTask },
  ];
};
