/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import InputTask from "./detail/InputTask";
import TaskContext from "../../../../context/TaskContext";
import { EMPTY_TASK } from "../../../../constants/constants";
import { formatDateToUTC } from "../../../../utils";
import { getTextInputsConfig } from "./detail/inputsConfig";
import { createTask } from "../../../../api/tasksAPI";

const Form = () => {
  // STATE
  const [inputValue, setInputValue] = useState(EMPTY_TASK);
  const { setTasks } = useContext(TaskContext);

  //COMPORTEMENTS
  const handleCreateTask = async (event) => {
    event.preventDefault();
    await createTask(inputValue);
    setTasks((tasks) => [
      ...tasks,
      { ...inputValue, end_date: formatDateToUTC(inputValue.end_date) },
    ]);
    console.log("handleCreateTask ", inputValue.end_date);
    setInputValue(EMPTY_TASK);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    // changer name par value
    const valueFinal = name === "end_date" ? formatDateToUTC(value) : value;
    console.log("name dans handle Change ", valueFinal);

    if (value === "end_date ") {
      console.log("name end_date", name);
    }

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
      start_date: formatDateToUTC(new Date()),
    }));
    console.log("valueFinal ", valueFinal);
  };

  const inputsConfig = getTextInputsConfig(inputValue);

  // JSX
  return (
    <form onSubmit={handleCreateTask}>
      {inputsConfig.map((input) => {
        return (
          <InputTask
            {...input}
            key={input.name}
            value={input.value}
            onChange={handleChange}
          />
        );
      })}
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
