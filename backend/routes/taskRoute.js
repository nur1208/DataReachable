import express from "express";
import {
  createTask,
  getTasks,
  updateTasks,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter
  .route("/")
  .post(createTask)
  .get(getTasks)
  .put(updateTasks);
export default taskRouter;
