/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { newTaskToAdd, EmptyTask } from "../../../../utils";
import { getTasks } from "../../../../api/tasksAPI";
import InputsTask from "./detail/InputsTask";
import { getTextInputConfig } from "./detail/inputsConfig";

const HomeForm = ({ setTasks }) => {
  // STATE
  const [newTask, setNewTask] = useState(EmptyTask);

  // BEHAVIOR
  // @TODO EXTRACT TO CUSTOM HOOK
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  // TODO EXTRACT TO CUSTOM HOOK
  const handleTaskCreate = async (event) => {
    event.preventDefault();
    await newTaskToAdd(newTask, setTasks, setNewTask);
    await fetchTasks();
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
    <form onSubmit={handleTaskCreate}>
      {getTextInputConfig.map((input) => (
        <InputsTask
          key={input.id}
          value={newTask[input.name]} // Pass the value directly from newTask
          onChange={handleChange}
          labelValue={input.name} // Using placeholder as labelValue for now
          id={input.id}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      ))}
      <button type="submit">Add task</button>
    </form>
  );
};

export default HomeForm;
