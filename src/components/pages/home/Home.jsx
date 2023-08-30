import { useEffect, useState } from "react";
import Tasks from "./tasks/Tasks";
import Form from "./taskForm/Form";
import Title from "../../reusableUI/Title";
import { TASK_TITLE } from "../../../constants/constants";
import { styled } from "styled-components";
import SearchBar from "./searchBar/SearchBar";
import { getTasks } from "../../../api/tasksAPI";
import TaskContext from "../../../context/TaskContext";
import Logo from "../../reusableUI/Logo";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);

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
      <TaskStyled className="todo-container">
        <Logo />
        <Title label={TASK_TITLE} />
        <Form />
        <SearchBar />
        <Tasks />
      </TaskStyled>
    </TaskContext.Provider>
  );
};

export default Home;

const TaskStyled = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  border: 1px solid black;
`;
