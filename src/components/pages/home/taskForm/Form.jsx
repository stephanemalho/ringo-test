/* eslint-disable react/prop-types */
import { useState } from "react";
import InputsTask from "./detail/InputsTask";
import { getTextInputConfig } from "./detail/inputsConfig";
import { EMPTY_TASK } from "../../../../constants/constants";

const Form = () => {
  // STATE
  const [newTask, setNewTask] = useState(EMPTY_TASK);

  const handleTaskCreate = async (event) => {
    event.preventDefault();
    console.log("NewTask " , newTask);
  };

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


