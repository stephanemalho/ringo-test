import { useEffect, useState } from "react";
import Tasks from "./tasks/Tasks";
import Form from "./taskForm/Form";
import Title from "../../reusableUI/Title";
import { TASK_TITLE } from "../../../constants/constants";
import { styled } from "styled-components";
import SearchBar from "./searchBar/SearchBar";
import { getTasks } from "../../../api/tasksAPI";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);

  const getDataFromDB = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    getDataFromDB();
  }, []);
  
  // JSX
  return (
    <TaskStyled className="todo-container">
      <Title label={TASK_TITLE} />
      <Form setTasks={setTasks} tasks={tasks} />
      <SearchBar tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </TaskStyled>
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