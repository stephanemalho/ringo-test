/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components";
import TodoContent from "./detail/TodoContent";
import { useContext, useState, useEffect } from "react";
import TaskContext from "../../../../../context/TaskContext";
import { deleteTaskInDB, getTasks } from "../../../../../api/tasksAPI";
import { filterTasks } from "../../../../../utils";
import { FiTrash2 } from "react-icons/fi";
import RadioButton from "../../../../reusableUI/RadioButton";

// eslint-disable-next-line react/prop-types
const Task = ({ label, description, startDate }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [setIsTodoDone] = useState(false);
  const [isDeleted, setisDeleted] = useState(false);

  const handleDelete = async (label) => {
    await deleteTaskInDB(label);
    deleteCardSelected(tasks, label, setTasks);
    setisDeleted(true);
  };

  function deleteCardSelected(tasks, id, setTasks) {
    const taskCopy = [...tasks];
    const newTasksFiltered = taskCopy.filter((task) => task.id !== id);
    setTasks(newTasksFiltered);
  }

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
    setisDeleted(false);
  };

  useEffect(() => {
    if (isDeleted) {
      fetchTasks();
    }
  }, [isDeleted]);

  const onClickCheckbox = async (taskLabel) => {
    setIsTodoDone((prevIsTodoDone) => !prevIsTodoDone);

    filterTasks(tasks, taskLabel, setTasks);
  };

  return (
    <TaskStyled>
      <RadioButton
        id={label}
        type="radio"
        onChange={() => onClickCheckbox(label)}
        container="btn-groupe"
        inputRadioStyle="radio-btn-hide"
        labelRadioStyle="label-btn"
        indicatorChecked="indicator"
      />
      <TodoContent description={description} label={label} date={startDate} />
      <div className="icon-container">
        <FiTrash2 className="icon" onClick={() => handleDelete(label)} />
      </div>
    </TaskStyled>
  );
};

export default Task;

const TaskStyled = styled.div`
  background: pink;
  display: grid;
  grid-template-columns: 52px 270px 1fr;

  .icon-container {
    border: 1px solid blue;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      color: red;
      &:hover {
        color: white;
      }
    }
  }
`;
