import Api from "./api";

const TaskEndpoints = {
  get() {
    return Api().get("/api/v1/tasks");
  },
};
export default TaskEndpoints;
