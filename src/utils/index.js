import { createTask } from "../api/tasksAPI";
import { EMPTY_TASK } from "../constants/constants";

export const taskData = (newTask) => {
  const newTaskData = {
    label: newTask.label,
    description: newTask.description,
    start_date: newTask.start_date,
    end_date: newTask.end_date,
    id: crypto.randomUUID(),
  };
  return newTaskData;
};

export async function newTaskToAdd(newTask, setNewTask, setTasks) {
  try {
    checkSelectedDate(newTask, setNewTask);
    newTask.start_date = new Date().toISOString();
    newTask.end_date = new Date(newTask.end_date).toISOString().split("T")[0];
    const newTaskData = taskData(newTask);
    const createdTask = await createTask(newTaskData);
    setTasks((prevTasks) => [...prevTasks, createdTask]);
    console.log("Tâche créée avec succès :", createdTask.start_date);
    setNewTask(EMPTY_TASK);
  } catch (error) {
    console.error("Erreur lors de la création de la tâche :", error);
  }
}


export function checkSelectedDate(newTask, setNewTask) {
  const today = new Date();
  const selectedDate = new Date(newTask.end_Date);
  if (selectedDate < today) {
    setNewTask((prevTask) => ({
      ...prevTask,
      end_date: today,
    }));
  }
}
