import { useContext, useState } from "react";
import TaskContext from "../../../../../context/TaskContext";

// eslint-disable-next-line react/prop-types
const CheckBoxTodo = ({endDate, id, isTodo, setIsTodo,}) => {
  const [previousEndDate, setPreviousEndDate] = useState(endDate);
  const {tasks, setTasks} =useContext(TaskContext);

  const handleChange = () => {
    newTaskValue(
      setIsTodo,
      isTodo,
      tasks,
      id,
      previousEndDate,
      setTasks,
      setPreviousEndDate
    );
  };

  return (
    <div className="checkbox-container">
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          value={endDate}
          onChange={handleChange}
          name={`checkbox-${id}`}
        />
        <label htmlFor={`checkbox-${id}`} className="checkbox-label">
          {isTodo ? "Terminer le " + endDate : "À terminer avant le " + endDate}
        </label>
      </div>
  )
}

export default CheckBoxTodo

function newTaskValue(
  setIsTodo,
  isTodo,
  tasks,
  id,
  previousEndDate,
  setTasks,
  setPreviousEndDate
) {
  setIsTodo(!isTodo);
  const taskCopy = [...tasks];
  const newTasks = taskCopy.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        end_date: isTodo ? previousEndDate : new Date().toLocaleDateString(),
      };
    }
    return task;
  });

  setTasks(newTasks);
  if (isTodo) {
    setPreviousEndDate(previousEndDate);
  }
}