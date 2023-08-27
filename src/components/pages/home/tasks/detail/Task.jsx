import { styled } from "styled-components"
// eslint-disable-next-line react/prop-types
const Task = ({label, description, endDate, id, tasks, setTasks}) => {

  const handleDelete = () => {
    const taskCopy = [...tasks]
    const newTasksFiltered = taskCopy.filter((task) => task.id !== id)
    setTasks(newTasksFiltered)
  }
  
  return (
    <TaskStyled id={id} className="task-style">
        <p>{label}</p>
        <p>{description}</p>
        <p>Date de fin: {endDate}</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </TaskStyled>
  )
}

export default Task

const TaskStyled = styled.div`
  border: 1px solid brown;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  p:first-child {
    font-weight: bold;
  }
`