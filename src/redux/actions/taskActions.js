import { STATUSES } from "../../data";
import TaskEndpoints from "../../services/Task";
import {
  TASK_ADD_FAIL,
  TASK_ADD_LOADING,
  TASK_ADD_SUCCESS,
  TASK_GET_LOADING,
} from "../constants";

export const getTasks = () => {};

export const addTask = () => {
  return async (dispatch) => {
    dispatch({
      type: TASK_ADD_LOADING,
    });
    try {
      const newTask = {
        task: "",
        status: STATUSES.PREPARE_TO_STUDY,
      };
      const {
        data: { article },
      } = await TaskEndpoints.post(newTask);

      dispatch({
        type: TASK_ADD_SUCCESS,
        payload: { newTask: article },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: TASK_ADD_FAIL,
      });
    }
  };
};
