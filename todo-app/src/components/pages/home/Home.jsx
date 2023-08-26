import { useEffect, useState } from "react";
import { createTask, getTasks } from "../../../api/tasksAPI";
import { taskData } from "../../../utils";
import Tasks from "./tasks/Tasks";
import Title from "../../reusableUI/Title";
import { title } from "../../../constants/constants";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const [newTask, setNewTask] = useState("");
  console.log(newTask);
  const [description, setDescription] = useState("");

  // BEHAVIOR

  // @TODO EXTRACT TO CUSTOM HOOK
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  // TODO EXTRACT TO CUSTOM HOOK
  const handleTaskCreate = async () => {
    try {
      const newTaskData = taskData(newTask, description);
      const createdTask = await createTask(newTaskData);
      setTasks((prevTasks) => [...prevTasks, createdTask]); // Utilisation du callback
      setNewTask("");
      setDescription("");
    } catch (error) {
      console.error("Erreur lors de la création de la tâche :", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [newTask]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  // JSX
  return (
    <div className="todo-container">
      <Title label={title} />
      <from>
        <label htmlFor="new-task">New task</label>
        <input
          id="new-task"
          type="text"
          value={newTask}
          onChange={handleChange}
        />
        <label htmlFor="new-description">New Description</label>
        <input
          id="new-description"
          type="text"
          value={description}
          onChange={handleChangeDescription}
        />
        <button onClick={handleTaskCreate}>Add task</button>
      </from>
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Home;
