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
    const lowerCaseSearchValue = searchValue.toLowerCase();
    return (
      task.label.toLowerCase().includes(lowerCaseSearchValue) ||
      task.description.toLowerCase().includes(lowerCaseSearchValue) ||
      task.end_date.includes(lowerCaseSearchValue) ||
      task.start_date.includes(lowerCaseSearchValue)
    );
  });
  return filteredTasks;
}

export const formatDateToUTC = (dateToFormat) => {
  return moment(dateToFormat).format("YYYY-MM-DDTHH:mm:ss[Z]");
};

export const formatDateToStandard = (dateToFormat) => {
  if (dateToFormat === "") return "";
  return moment(dateToFormat).format("YYYY-MM-DD");
};
