import { useEffect, useState } from "react";
import Tasks from "./tasks/Tasks";
import Form from "./taskForm/Form";
import { styled } from "styled-components";
import SearchBar from "./searchBar/SearchBar";
import TaskContext from "../../../context/TaskContext";
import Header from "./Header/Header";
import { theme } from "../../../theme";
import { fakeTasks } from "../../../data/fakeTasks";
import { getTasks } from "../../../api/tasksAPI";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState(fakeTasks.MEDIUM);

  // BEHAVIOR
  const fetchTasks = async () => {
    // const tasks = await getTasks();
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
