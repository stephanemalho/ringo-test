import { createContext } from "react";

export default createContext({
  tasks: [],
  setTasks: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleUpdateTasks: () => {},
  searchValue: [],
  setSearchValue: () => {},
});
