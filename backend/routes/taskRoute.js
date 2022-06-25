import express from "express";
import {
  createTask,
  getTasks,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.route("/").post(createTask).get(getTasks);
export default taskRouter;
