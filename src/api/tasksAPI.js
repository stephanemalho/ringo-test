import axios from "axios";
import { API_BASE_URL } from "./baseURL";
import { options } from "./options";

// export const getTasks = async () => {
//   return axios
//     .get(`${API_BASE_URL}/tasks`)
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });
// };

export const createTask = async (newTaskData) => {
  return axios
    .post(`${API_BASE_URL}/tasks`, newTaskData, options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
