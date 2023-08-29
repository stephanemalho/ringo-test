/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import InputTask from "./detail/InputTask";
// import { getTextInputsConfig } from "./detail/inputsConfig";
import TaskContext from "../../../context/TaskContext";
import { EMPTY_TASK } from "../../../../constants/constants";
import { formatDateToUTC } from "../../../../utils";
import { getTextInputsConfig } from "./detail/inputsConfig";

const Form = () => {
  // STATE
  const [inputValue, setInputValue] = useState(EMPTY_TASK);
  const { setTasks } = useContext(TaskContext);

  // COMPORTEMENTS
  const handleCreateTask = async (event) => {
    event.preventDefault();
    setTasks((tasks) => [...tasks, inputValue]);
    setInputValue("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const valueFinal = name === "end_date" ? formatDateToUTC(value) : value;

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: valueFinal,
      start_date: formatDateToUTC(new Date()),
    }));
    console.log(inputValue);
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

// function checkSelectedDate(inputValue, setInputValue) {
//   const today = new Date();
//   const selectedDate = new Date(inputValue.end_Date);
//   if (selectedDate < today) {
//     setInputValue((prevTask) => ({
//       ...prevTask,
//       end_date: today,
//     }));
//   } else {
//     setInputValue((prevTask) => ({
//       ...prevTask,
//       end_date: selectedDate,
//     }));
//   }
// }
