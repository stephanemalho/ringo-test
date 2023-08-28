/* eslint-disable react/prop-types */
import { useState } from "react";
import InputsTask from "./detail/InputsTask";
import { getTextInputConfig } from "./detail/inputsConfig";
import { EMPTY_TASK } from "../../../../constants/constants";
import { newTaskToAdd } from "../../../../utils";

const Form = ({tasks, setTasks}) => {
  // STATE
  const [newTask, setNewTask] = useState(EMPTY_TASK);

  const handleTaskCreate = async (event) => {
    event.preventDefault();
    await newTaskToAdd(newTask, setNewTask, setTasks);
    updateTasks(setTasks, tasks, newTask, setNewTask);
    console.log("new task ", newTask);
  };

  const handleChange = (e) => {
    newTaskValue(e, setNewTask, newTask);
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


const updateTasks = (setTasks, tasks, newTask, setNewTask) => {
  if (!newTask.label || !newTask.description || !newTask.end_date) return;
  setTasks(tasks.concat({
    ...newTask,
    id: tasks.length + 1,
  }));
  setNewTask(EMPTY_TASK);
  console.log("new task length", tasks.length);
}

function newTaskValue(e, setNewTask, newTask) {
  const { name, value } = e.target;
  setNewTask((prevTask) => ({
    ...prevTask,
    [name]: value,
  })
  );
  console.log("new task ", newTask);
}

