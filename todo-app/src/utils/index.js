export const taskData = (newTask, description) => {
  const newTaskData = {
    label: newTask,
    description: description,
    start_date: new Date().toISOString(),
    end_date: "",
  };
  return newTaskData;
}