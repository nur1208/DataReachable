import axios from "axios";

const API = () => {
  return axios.create({
    baseURL: `http://localhost:3354`,
  });
};
export default API;
