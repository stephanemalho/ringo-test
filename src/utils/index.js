import moment from "moment";
import { updateTaskInDB } from "../api/tasksAPI";

export const hasEndDate = (value) => {
  return value === "" ? false : true;
};

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

export function tasksToFilter(tasksToFilter, searchValue) {
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


export function filterSearchedTasks(tasks, searchValue) {
  return tasks.filter((task) => {
    const searchedValue = searchValue.toLowerCase();
    const hasSearchedValueInLabel = task.label.toLowerCase().includes(searchedValue);
    const hasSearchedValueInEndDate = task.end_date.includes(searchedValue);
    const hasSearchedValueInStartDate = task.start_date.includes(searchedValue);  
    const hasSearchedValue = hasSearchedValueInLabel || hasSearchedValueInEndDate || hasSearchedValueInStartDate;
    return searchedValue === "" ? task : hasSearchedValue;
  });
}

export const formatDateToUTC = (dateToFormat) => {
  return moment(dateToFormat).format("YYYY-MM-DDTHH:mm:ss[Z]");
};

export const formatDateToStandard = (dateToFormat) => {
  if (dateToFormat === "") return "";
  return moment(dateToFormat).format("YYYY-MM-DD");
};

export const formatDateToCalendar = (dateToFormat) => {
  if (dateToFormat === "") return "";
  return moment(dateToFormat).format("DD/MM/YYYY");
};

export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};
