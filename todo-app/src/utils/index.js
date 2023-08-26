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

export  const taskToAdd = {
  label: "",
  description: "",
};

export async function newTaskToAdd(newTask, setTasks, setNewTask) {
  try {
    const newTaskData = taskData(newTask);
    const createdTask = await createTask(newTaskData);
    setTasks((prevTasks) => [...prevTasks, createdTask]); // Utilisation du callback
    console.log("task value", newTaskData);
    console.log("Tâche créée :", createdTask);

    setNewTask("");
  } catch (error) {
    console.error("Erreur lors de la création de la tâche :", error);
  }
}