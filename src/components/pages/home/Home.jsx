import { useState } from "react";
import Tasks from "./tasks/Tasks";
import Form from "./taskForm/Form";
import Title from "../../reusableUI/Title";
import { TASK_TITLE } from "../../../constants/constants";
import { fakeTasks } from "../../../Data/fakeTasks";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState(fakeTasks.SMALL);
  
  // JSX
  return (
    <div className="todo-container">
      <Title label={TASK_TITLE} />
      <Form setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
