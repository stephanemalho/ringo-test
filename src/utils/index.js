import { createTask } from "../api/tasksAPI";

export const taskData = (newTask) => {
  const newTaskData = {
    label: newTask.label,
    description: newTask.description,
    start_date: newTask.start_date,
    end_date: newTask.end_date,
  };
  return newTaskData;
};

export const EmptyTask = {
  label: "",
  description: "",
  start_date: "",
  end_date: "",
};

export async function newTaskToAdd(newTask, setTasks, setNewTask) {
  try {
    checkSelectedDate(newTask, setNewTask);
    // Mettre à jour start_date ici
    newTask.start_date = new Date().toISOString();
    newTask.end_date = new Date(newTask.end_date).toISOString();
    const newTaskData = taskData(newTask);
    const createdTask = await createTask(newTaskData);
    setTasks((prevTasks) => [...prevTasks, createdTask]);
    console.log("Tâche créée avec succès :", createdTask.start_date);
    setNewTask(EmptyTask);
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
