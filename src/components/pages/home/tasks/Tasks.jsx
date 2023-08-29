import { useContext } from "react";
import Task from "./task/Task";
import TaskContext from "../../../context/TaskContext";

/* eslint-disable react/prop-types */
const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.label}
          id={task.id}
          label={task.label}
          description={task.description}
          endDate={task.end_date}
          startDate={task.start_date}
        />
      ))}
    </>
  );
};

export default Tasks;
