import { useEffect, useState } from "react";
import Tasks from "./tasks/Tasks";
import Form from "./taskForm/Form";
import { styled } from "styled-components";
import SearchBar from "./searchBar/SearchBar";
import { getTasks } from "../../../api/tasksAPI";
import TaskContext from "../../../context/TaskContext";
import Header from "./Header/Header";
import { theme } from "../../../theme";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);

  // BEHAVIOR
  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // CONTEXT
  const taskContextValue = {
    tasks,
    setTasks,
  };

  // JSX
  return (
    <TaskContext.Provider value={taskContextValue}>
      <HomeStyled className="todo-container">
        <Header />

        <Form />
        <SearchBar />
        <Tasks />
      </HomeStyled>
    </TaskContext.Provider>
  );
};

export default Home;

const HomeStyled = styled.div`
  display: flex;
  border: 1px solid green;
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  border: 1px solid black;
`;
