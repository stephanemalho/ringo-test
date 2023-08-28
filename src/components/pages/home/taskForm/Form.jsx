/* eslint-disable react/prop-types */
import { useState } from "react";
import InputsTask from "./detail/InputsTask";
import { getTextInputConfig } from "./detail/inputsConfig";
import { EMPTY_TASK } from "../../../../constants/constants";

const Form = ({tasks, setTasks}) => {
  // STATE
  const [newTask, setNewTask] = useState(EMPTY_TASK);

  const handleTaskCreate = async (event) => {
    event.preventDefault();
    setTasks(tasks.concat({
      ...newTask,
      id: tasks.length + 1,
    }));
    setNewTask(EMPTY_TASK);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      })
    );
    console.log("new task ",newTask);
    console.log("id ",newTask.id);
  };

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


