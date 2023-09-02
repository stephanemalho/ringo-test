import { useEffect, useState } from "react";
import Tasks from "./tasks/Tasks";
import Form from "./taskForm/Form";
import { styled } from "styled-components";
import SearchBar from "./searchBar/SearchBar";
import TaskContext from "../../../context/TaskContext";
import Header from "./Header/Header";
import { theme } from "../../../theme";
import { deleteTaskInDB, getTasks } from "../../../api/tasksAPI";
import { deepClone } from "../../../utils";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // État pour stocker la valeur de recherche


  // BEHAVIOR
  const handleAdd = (newTaskToAdd) => {
    const tasksCopy = deepClone(tasks);
    setTasks([...tasksCopy, newTaskToAdd]);
  };

  const handleDelete = async (label) => {
    await deleteTaskInDB(label);
    const tasksCopy = deepClone(tasks);
    const newTasksFiltered = tasksCopy.filter((task) => task.label !== label);
    setTasks(newTasksFiltered);
  };

  const fetchTasks = async () => {
    const tasksReceived = await getTasks();
    setTasks(tasksReceived);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // CONTEXT
  const taskContextValue = {
    tasks,
    setTasks,
    handleAdd,
    handleDelete,
    searchValue, 
    setSearchValue
  };

  // JSX
  return (
    <TaskContext.Provider value={taskContextValue}>
      <HomeStyled className="todo-container">
        <Header />
        <Form />
        <hr />
        <SearchBar />
        <Tasks />
      </HomeStyled>
    </TaskContext.Provider>
  );
};

export default Home;

const HomeStyled = styled.div`
  height: 650px;
  display: flex;
  border: 1px solid green;
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  flex-direction: column;
  padding: 50px 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  border: 1px solid black;
  button {
    margin-top: 8px;
  }

  .search-container {
    margin-bottom: 24px;
  }

  hr {
    border: 1px solid ${theme.colors.greyLight};
    width: 100%;
    margin-top: 31px;
    margin-bottom: 31px;
  }
`;
