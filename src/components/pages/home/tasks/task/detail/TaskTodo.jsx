import { TiDelete } from 'react-icons/ti'

// eslint-disable-next-line react/prop-types
const TaskTodo = ({isTodo , label, tasks, id , setTasks}) => {

  const handleDelete = () => {
    deleteCardSelected(tasks, id, setTasks);
  }; 

  return (
    <div className="tasktodo-container">
    <TiDelete className="delete-task" onClick={() => handleDelete(id)} />
    <h3>Tache à faire:</h3> 
    <p className={isTodo ? "task-p__checked" : ""}>{label}</p>
  </div>
  )
}

export default TaskTodo

function deleteCardSelected(tasks, id, setTasks) {
  const taskCopy = [...tasks];
  const newTasksFiltered = taskCopy.filter((task) => task.id !== id);
  setTasks(newTasksFiltered);
}