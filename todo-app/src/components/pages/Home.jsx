import { useEffect, useState } from "react";
import { createTask, getTasks } from "../../api/tasksAPI";

const Home = () => {
  // STATE
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const [newTask, setNewTask] = useState("");
  console.log(newTask);
  const [description, setDescription] = useState("");

  // BEHAVIOR
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleTaskCreate = async () => {
    try {
      const newTaskData = {
        label: newTask,
        description: description,
        start_date: new Date().toISOString(),
        end_date: "",
      };
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
      <h1>Home</h1>
      <p>{tasks?.[0]?.label}</p>
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
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.label}</p>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
