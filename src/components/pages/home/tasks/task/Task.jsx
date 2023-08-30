/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components";
import TodoContent from "./detail/TodoContent";
import { useContext, useState, useEffect } from "react";
import TaskContext from "../../../../../context/TaskContext";
import { deleteTaskInDB, getTasks } from "../../../../../api/tasksAPI";
import { filterTasks } from "../../../../../utils";
import Button from "../../../../reusableUI/Button";
import { TiDelete } from "react-icons/ti";
import { CgRadioChecked } from "react-icons/cg";
import Checkbox from "../../../../reusableUI/Checkbox";

// eslint-disable-next-line react/prop-types
const Task = ({ label, description }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [isTodoDone, setIsTodoDone] = useState(false);
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
      <Checkbox
        id={label}
        type="checkbox"
        onChange={() => onClickCheckbox(label)}
        icon={isTodoDone && <CgRadioChecked className="check-icon" />}
      />
      <TodoContent description={description} label={label} />
      <Button
        logo={<TiDelete className={"delete-task"} />}
        label={label}
        onClick={() => handleDelete(label)}
      />
    </TaskStyled>
  );
};

export default Task;

const TaskStyled = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
