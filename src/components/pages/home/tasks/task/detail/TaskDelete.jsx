import { TiDelete } from "react-icons/ti";
import { deleteTaskInDB, getTasks } from "../../../../../../api/tasksAPI";
import { useContext, useEffect, useState } from "react";
import TaskContext from "../../../../../../context/TaskContext";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const TaskDelete = ({ label }) => {
  const [isDeleted, setisDeleted] = useState(false)
  const { tasks, setTasks } = useContext(TaskContext);

  console.log("tasks dans TaskDelete:", tasks);

  const handleDelete = async (label) => {
    await deleteTaskInDB(label);
    deleteCardSelected(tasks, label, setTasks);
    setisDeleted(true)
  };

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
    setisDeleted(false)
  };

  useEffect(() => {
    if (isDeleted) {
      fetchTasks();
    }
  }, [isDeleted]);


  return (
    <TaskDeleteStyled onClick={() => handleDelete(label)}>
      <TiDelete className="delete-task" />
    </TaskDeleteStyled>
  );
};

export default TaskDelete;

const TaskDeleteStyled = styled.div`
  display: flex;
  margin-left: auto;
  width: 60px;
  background-color: white;
  position: relative;
  border-radius: 0 10px 10px 0;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: red;
    transition: 0.5s;
  }
  .delete-task {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    color: white;
    background-color: transparent;
    &:hover {
      color: white;
      transition: 0.5s;
    }
  }
`;

function deleteCardSelected(tasks, id, setTasks) {
  const taskCopy = [...tasks];
  const newTasksFiltered = taskCopy.filter((task) => task.id !== id);
  setTasks(newTasksFiltered);
}
