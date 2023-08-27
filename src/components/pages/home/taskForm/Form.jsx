/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {  EmptyTask, checkSelectedDate, newTaskToAdd } from "../../../../utils";
import { getTasks } from "../../../../api/tasksAPI";
import InputsTask from "./detail/InputsTask";
import { getTextInputConfig } from "./detail/inputsConfig";

const Form = ({ setTasks }) => {
  // STATE
  const [newTask, setNewTask] = useState(EmptyTask);

  // BEHAVIOR
  // @TODO EXTRACT TO CUSTOM HOOK
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleTaskCreate = async (event) => {
    event.preventDefault();
    checkSelectedDate(newTask, setNewTask);
    await newTaskToAdd(newTask, setTasks, setNewTask);
    await fetchTasks();
    console.log("newTask", newTask);
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
  }

  // JSX
  return (
    <form onSubmit={handleTaskCreate}>
      {getTextInputConfig.map((input) => (
        <InputsTask
          key={input.id}
          value={newTask[input.name]}
          onChange={handleChange}
          labelValue={input.name}
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

export default Form;


