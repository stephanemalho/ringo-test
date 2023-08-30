import { styled } from "styled-components";
import TaskContent from "./detail/TaskContent";
import DescriptionTodo from "./detail/DescriptionTodo";
import CheckBoxTodo from "./detail/CheckBoxTodo";
import { useContext, useState } from "react";
import TaskContext from "../../../../../context/TaskContext";
import { updateTaskInDB } from "../../../../../api/tasksAPI";
import { formatDateToUTC } from "../../../../../utils";

// eslint-disable-next-line react/prop-types
const Task = ({ label, description, endDate, id }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [isTodoDone, setIsTodoDone] = useState(false);

  const onClickCheckbox = async (taskId) => {
    // Mise à jour de l'état en fonction de la valeur précédente
    setIsTodoDone((prevIsTodoDone) => !prevIsTodoDone);

    const updatedTasks = tasks.map((task) => {
      if (task.label === taskId) {
        return {
          ...task,
          end_date: formatDateToUTC(new Date()).toString(),
        };
      }
      console.log("task dans newTaskValue:", task);
      return task;
    });
    console.log("updatedTasks:", updatedTasks);
    //await updateTaskInDB(label, updatedTasks);
    setTasks(updatedTasks);
    updatedTasks.forEach((task) => {
      if (task.label === taskId) {
        console.log("task dans updatedTasks:", task);
        console.log("task.end_date:", task.end_date);
        console.log("task.label:", task.label);
        updateTaskInDB(task.label, task.end_date);
      }
    }
    );
  };

  return (
    <TaskStyled id={id}>
      <TaskContent label={label} id={id} />
      <DescriptionTodo description={description} />
      <CheckBoxTodo
        endDate={endDate}
        id={id}
        isTodoDone={isTodoDone}
        onClickCheckbox={() => onClickCheckbox(id)}
      />
    </TaskStyled>
  );
};

export default Task;

const TaskStyled = styled.div`
    border: 1px solid brown;
    border-radius: 10px;
    margin-top: 20px;
  .task-p:first-child {
    font-weight: bold;
  }
  
  .tasktodo-container {
    padding-left: 20px;
  }
  .task-p__checked {
    text-decoration: line-through;
  }
  
  .delete-task {
    display: block;
    margin-left: auto;
    color: red;
    cursor: pointer;
    font-size: 2rem;
    text-align: right;
  }
`;
