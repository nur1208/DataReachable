import Api from "./api";

const TaskEndpoints = {
  get() {
    return Api().get("/api/v1/tasks");
  },
  post(data) {
    return Api().post("/api/v1/tasks", data);
  },
  put(data) {
    return Api().put("/api/v1/tasks", data);
  },
  delete(id) {
    return Api().delete(`/api/v1/tasks?id=${id}`);
  },
};
export default TaskEndpoints;
