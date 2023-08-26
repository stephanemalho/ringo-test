import { useState } from "react";
import Tasks from "./tasks/Tasks";
import HomeForm from "./HomeForm";
import Title from "../../reusableUI/Title";
import { title } from "../../../constants/constants";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);
  console.log(tasks);



  // JSX
  return (
    <div className="todo-container">
      <Title label={title} />
      <HomeForm setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Home;
