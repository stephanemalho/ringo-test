import { styled } from "styled-components"



// eslint-disable-next-line react/prop-types
const Task = ({key, label, description, endDate}) => {

  const handleDelete = () => {
    console.log('delete')
  }
  
  return (
    <TaskStyled key={key} className="task-style">
        <p>{label}</p>
        <p>{description}</p>
        <p>Date de fin: {endDate}</p>
        <button onClick={handleDelete}>Delete</button>
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