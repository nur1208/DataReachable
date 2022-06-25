import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    task: String,
    status: { type: String, default: "Prepare to study" },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("Tasks", newsSchema);

export default TaskModel;
