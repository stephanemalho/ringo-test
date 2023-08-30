import { useContext } from "react";
import Task from "./task/Task";
import TaskContext from "../../../../context/TaskContext";
import { styled } from "styled-components";

/* eslint-disable react/prop-types */
const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      {tasks.length === 0 ? (
        <TasksStyled>
          <div className="tasks-empty">Ajouter une tâche...</div>
        </TasksStyled>
      ) : (
        <TasksStyled>
          {tasks.map((task) => (
            <Task
              key={task.label}
              id={task.label}
              label={task.label}
              description={task.description}
              endDate={task.end_date}
              startDate={task.start_date}
            />
          ))}
        </TasksStyled>
      )}
    </>
  );
};

export default Tasks;

const TasksStyled = styled.div`
  width: 100%;

  .tasks-empty {
    height: 500px;
    width: 400px;
    margin-top: 50px;
    text-align: center;
    font-size: 30px;
  }
`;
