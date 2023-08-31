import axios from "axios";
import { API_BASE_URL } from "./baseURL";
import { options } from "./options";

export const getTasks = async () => {
  return axios
    .get(`${API_BASE_URL}/tasks`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const createTask = async (newTaskData) => {
  return axios
    .post(`${API_BASE_URL}/tasks`, newTaskData, options)
    .then((response) => response.data)
    .catch((error) => {
      throw error + alert("Erreur : cette tâche existe déjà.");
    });
};

export const deleteTaskInDB = async (label) => {
  return axios
    .delete(`${API_BASE_URL}/tasks/${label}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const updateTaskInDB = async (label, date) => {
  const res = await axios.put(`${API_BASE_URL}/tasks/${label}`, {
    end_date: date,
  });
  console.log("res: ", res);
};
