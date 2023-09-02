import { createContext } from "react";

export default createContext({
  tasks: [],
  setTasks: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  searchValue: [],
  setSearchValue: () => {},
});
