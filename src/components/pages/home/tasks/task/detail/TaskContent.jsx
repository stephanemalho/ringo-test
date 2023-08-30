import { TiDelete } from "react-icons/ti";
import { deleteTaskInDB } from "../../../../../../api/tasksAPI";
import { useContext } from "react";
import TaskContext from "../../../../../../context/TaskContext";
import { TASK_CONTENT } from "../../../../../../constants/constants";

// eslint-disable-next-line react/prop-types
const TaskContent = ({ label }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDelete = async (label) => {
    await deleteTaskInDB(label);
    deleteCardSelected(tasks, label, setTasks);
  };

  return (
    <div className="tasktodo-container">
      <TiDelete className="delete-task" onClick={() => handleDelete(label)} />
      <h3>{TASK_CONTENT.title}</h3>
    </div>
  );
};

export default TaskContent;

function deleteCardSelected(tasks, id, setTasks) {
  const taskCopy = [...tasks];
  const newTasksFiltered = taskCopy.filter((task) => task.id !== id);
  setTasks(newTasksFiltered);
}
