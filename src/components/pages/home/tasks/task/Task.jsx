import { useState } from "react";
import { styled } from "styled-components";
import TaskContent from "./detail/TaskContent";
import DescriptionTodo from "./detail/DescriptionTodo";
import CheckBoxTodo from "./detail/CheckBoxTodo";
// eslint-disable-next-line react/prop-types
const Task = ({ label, description, endDate, id, tasks, setTasks }) => {
  const [isTodo, setIsTodo] = useState(false);

  return (
    <TaskStyled id={id} className="task-style">
      <TaskContent
        isTodo={isTodo}
        label={label}
        tasks={tasks}
        id={id}
        setTasks={setTasks}
        //onDelete={handleDelete}
      />
      <DescriptionTodo isTodo={isTodo} description={description} />
      <CheckBoxTodo endDate={endDate} id={id} isTodo={isTodo} setIsTodo={setIsTodo} tasks={tasks} setTasks={setTasks} />
    </TaskStyled>
  );
};

export default Task;

const TaskStyled = styled.div`
  border: 1px solid brown;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  padding-left: 20px;
  text-align: left;
  .task-p:first-child {
    font-weight: bold;
  }
  .desc-p__todo {
    font-style: normal;
    height: 30px;
  }
  .desc-p__done {
    font-style: italic;
    color: green;
    height: 30px;
  }
  .task-p__checked {
    text-decoration: line-through;
  }
  .checkbox-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  .checkbox-label {
    margin-left: 10px;
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
