/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { newTaskToAdd, taskToAdd } from "../../../utils";
import { getTasks } from "../../../api/tasksAPI";

const HomeForm = ({ setTasks }) => {
  // STATE
  const [newTask, setNewTask] = useState(taskToAdd);

  // BEHAVIOR
  // @TODO EXTRACT TO CUSTOM HOOK
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };
  
  // TODO EXTRACT TO CUSTOM HOOK
  const handleTaskCreate = async () => {
    await newTaskToAdd(newTask, setTasks, setNewTask);
  };

  useEffect(() => {
    fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
    console.log("newTask", newTask);
  }

  // JSX
  return (
    <form>
        <label htmlFor="new-task">New task</label>
        <input
          id="new-task"
          type="text"
          name="label"
          value={newTask.label}
          onChange={handleChange}
        />
        <label htmlFor="new-description">New Description</label>
        <input
          id="new-description"
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleChange}
        />
        <button onClick={handleTaskCreate}>Add task</button>
      </form>
  )
}

export default HomeForm


