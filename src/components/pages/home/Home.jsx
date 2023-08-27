import { useState } from "react";
import Tasks from "./tasks/Tasks";
import Form from "./taskForm/Form";
import Title from "../../reusableUI/Title";
import { title } from "../../../constants/constants";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);
  
  // JSX
  return (
    <div className="todo-container">
      <Title label={title} />
      <Form setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Home;
