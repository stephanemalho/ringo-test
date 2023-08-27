import { styled } from "styled-components"
import { fakeTasks } from "../../../../../Data/fakeTasks"



// eslint-disable-next-line react/prop-types
const Task = ({label, description, endDate, id, setTasks}) => {

  const handleDelete = () => {
    console.log('delete' , id)
    fakeTasks.LARGE = fakeTasks.LARGE.filter((task) => task.id !== id)
    setTasks(fakeTasks.LARGE)

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