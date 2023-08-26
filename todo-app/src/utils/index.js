import { createTask } from "../api/tasksAPI";

export const taskData = (newTask) => {
  const newTaskData = {
    label: newTask.label,
    description: newTask.description,
    start_date: new Date().toISOString(),
    end_date: "",
  };
  return newTaskData;
};

export  const EmptyTask = {
  label: "",
  description: "",
};

export async function newTaskToAdd(newTask, setTasks, setNewTask) {
  try {
    const newTaskData = taskData(newTask);
    const createdTask = await createTask(newTaskData);
    setTasks((prevTasks) => [...prevTasks, createdTask]); // Utilisation du callback

    setNewTask(EmptyTask);
  } catch (error) {
    console.error("Erreur lors de la création de la tâche :", error);
  }
}