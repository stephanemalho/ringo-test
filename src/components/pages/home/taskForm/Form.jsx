/* eslint-disable react/prop-types */
import { useState } from "react";
import InputsTask from "./detail/InputsTask";
import { getTextInputConfig } from "./detail/inputsConfig";

const Form = () => {
  // STATE
  const [newTask, setNewTask] = useState({});

  const handleTaskCreate = async (event) => {
    event.preventDefault();
    console.log(newTask);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
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
          labelValue={input.labelValue}
          onChange={handleChange}
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


