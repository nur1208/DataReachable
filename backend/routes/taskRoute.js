import express from "express";
import {
  createTask,
  deleteTasks,
  getTasks,
  updateTasks,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter
  .route("/")
  .post(createTask)
  .get(getTasks)
  .put(updateTasks)
  .delete(deleteTasks);

export default taskRouter;
