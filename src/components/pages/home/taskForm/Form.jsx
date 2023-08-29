/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import InputTask from "./detail/InputTask";
// import { getTextInputConfig } from "./detail/inputsConfig";
import TaskContext from "../../../context/TaskContext";
import { EMPTY_TASK } from "../../../../constants/constants";

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
    if (name === "end_date") {
      const dateFormatted = formatDate(value);
      console.log(name, dateFormatted);
    }

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  // JSX
  return (
    <form onSubmit={handleCreateTask}>
      {/* {getTextInputConfig.map((input) => (
        <InputsTask
          {...input}
          onChange={handleChange}
          value={inputValue[input.name]}
          key={input.id}
        />
      ))} */}
      <InputTask
        value={inputValue.label}
        onChange={handleChange}
        type="text"
        placeholder="Tâche a faire ..."
        name="label"
      />
      <InputTask
        value={inputValue.description}
        onChange={handleChange}
        type="text"
        placeholder="Ajouter une description ..."
        name="description"
      />
      <InputTask
        value={inputValue.end_date}
        onChange={handleChange}
        type="date"
        placeholder="Ajouter une date de fin ..."
        name="end_date"
      />

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
