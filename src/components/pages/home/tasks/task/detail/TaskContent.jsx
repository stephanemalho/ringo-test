import { TiDelete } from "react-icons/ti";
import { deleteTaskInDB } from "../../../../../../api/tasksAPI";
import { useContext } from "react";
import TaskContext from "../../../../../context/TaskContext";

// eslint-disable-next-line react/prop-types
const TaskContent = ({ isTodo, label, id }) => {
  const {tasks, setTasks} = useContext(TaskContext);

  const handleDelete = async (id) => {
    deleteCardSelected(tasks, id, setTasks);
    await deleteTaskInDB(label);
  };

  return (
    <div className="tasktodo-container">
      <TiDelete className="delete-task" onClick={() => handleDelete(id)} />
      <h3>Titre ....</h3>
      <p className={isTodo ? "task-p__checked" : ""}>{label}</p>
    </div>
  );
};

export default TaskContent;

function deleteCardSelected(tasks, id, setTasks) {
  const taskCopy = [...tasks];
  const newTasksFiltered = taskCopy.filter((task) => task.label !== id);
  setTasks(newTasksFiltered);
}
