import { useEffect, useState } from "react";
import { useNotification } from "../components/Notification";
import { statuses, STATUSES } from "../data";
import TaskEndpoints from "../services/Task";
import colors from "../styles/colors";
import { useFirstRender } from "./useFirstRender";

export const useTaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const dispatch = useNotification();

  const [loading, setLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(true);
  // this app is rendering tiwic
  const isFirstRender = useFirstRender();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await TaskEndpoints.get();
        setLoading(false);
        setTasks(data.articles);

        dispatch({
          type: "success",
          message: `Autosave Is Active.`,
          title: "You Are Online",
          position: "topL",
          iconColor: colors.green,
        });
        setIsOffline(false);
      } catch (error) {
        dispatch({
          type: "error",
          message: `Please check your internet. Your tasks are not automatically saved`,
          title: "You Are Offline",
          position: "topL",
          iconColor: colors.red,
        });
        setLoading(false);
      }
    })();
  }, []);

  // useEffect(() => {
  //   console.log({ tasks });
  // }, [tasks]);

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
    // Update an item in the backend while typing a new task
    TaskEndpoints.put({ id: itemId, task: updatedTask });
  };

  const deleteTask = (itemId) => {
    setTasks((currentTask) =>
      currentTask.filter((x) => x.id !== itemId)
    );
    TaskEndpoints.delete(itemId);
  };

  const addTask = async () => {
    if (isOffline) {
      const article = {
        // Generate Unique ID
        id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
        task: "",
        status: STATUSES.PREPARE_TO_STUDY,
      };
      setTasks((currentTask) => [...currentTask, article]);
    } else {
      try {
        const newTask = {
          task: "",
          status: STATUSES.PREPARE_TO_STUDY,
        };
        const {
          data: { article },
        } = await TaskEndpoints.post(newTask);

        setTasks((currentTask) => [...currentTask, article]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return [
    { tasks, loading },
    { updateTask, deleteTask, onDrop, moveItem, addTask },
  ];
};
