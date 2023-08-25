import { API_BASE_URL } from "./baseURL";

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  return await response.json();
};

export const createTask = async (label) => {
  const response = await fetch(`${API_BASE_URL}/tasks/${label}`);
  return await response.json();
}

