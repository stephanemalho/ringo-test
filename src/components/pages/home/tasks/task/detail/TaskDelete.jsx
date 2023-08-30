import { TiDelete } from "react-icons/ti";
import { deleteTaskInDB } from "../../../../../../api/tasksAPI";
import { useContext } from "react";
import TaskContext from "../../../../../../context/TaskContext";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const TaskDelete = ({ label }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDelete = async (label) => {
    await deleteTaskInDB(label);
    deleteCardSelected(tasks, label, setTasks);
  };

  return (
    <TaskDeleteStyled>
      <TiDelete className="delete-task" onClick={() => handleDelete(label)} />
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
  }
`;

function deleteCardSelected(tasks, id, setTasks) {
  const taskCopy = [...tasks];
  const newTasksFiltered = taskCopy.filter((task) => task.id !== id);
  setTasks(newTasksFiltered);
}
