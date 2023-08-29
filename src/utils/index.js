import moment from "moment";

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

export function valueToFilter(tasksToFilter, searchValue) {
  const filteredTasks = tasksToFilter.filter((task) => {
    return (
      task.label.toLowerCase().includes(searchValue) ||
      task.description.toLowerCase().includes(searchValue) ||
      task.end_date.toLowerCase().includes(searchValue)
    );
  });
  return filteredTasks;
}

export function formatDate(value) {
  return moment(value).format("YYYY-MM-DDTHH:mm:ss[Z]");
}
