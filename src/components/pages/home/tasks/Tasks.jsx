import { useContext } from "react";
import Task from "./task/Task";
import TaskContext from "../../../../context/TaskContext";
import { styled } from "styled-components";

/* eslint-disable react/prop-types */
const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return null;

  return (
    <TasksStyled>
      {tasks.map((task) => (
        <Task
          key={task.label}
          label={task.label}
          description={task.description}
          endDate={task.end_date}
          startDate={task.start_date}
        />
      ))}
    </TasksStyled>
  );
};

export default Tasks;

const TasksStyled = styled.div`
  width: 100%;
  border: 1px solid red;

  .tasks-empty {
    height: 500px;
    width: 400px;
    margin-top: 50px;
    text-align: center;
    font-size: 30px;
  }
`;
