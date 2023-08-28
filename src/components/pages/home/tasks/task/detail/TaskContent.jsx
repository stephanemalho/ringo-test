import { TiDelete } from "react-icons/ti";
import { deleteTaskInDB } from "../../../../../../api/tasksAPI";

// eslint-disable-next-line react/prop-types
const TaskContent = ({ isTodo, label, tasks, id, setTasks }) => {
  const handleDelete = () => {
    deleteCardSelected(tasks, id, setTasks);
    deleteTaskInDB(label);
  };

  return (
    <div className="tasktodo-container">
      <TiDelete className="delete-task" onClick={() => handleDelete(id)} />
      <h3>Tache à faire:</h3>
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
