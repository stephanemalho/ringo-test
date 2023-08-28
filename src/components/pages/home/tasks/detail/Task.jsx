import { useState } from "react"
import { styled } from "styled-components"
// eslint-disable-next-line react/prop-types
const Task = ({label, description, endDate , id, tasks, setTasks}) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleDelete = () => {
    const taskCopy = [...tasks]
    const newTasksFiltered = taskCopy.filter((task) => task.id !== id)
    setTasks(newTasksFiltered)
  }

  const handleChange = () => {
    setIsChecked(!isChecked)
    // modify endDate with today date when checkbox is checked
    if (!isChecked) {
      const taskCopy = [...tasks]
      const newTasks = taskCopy.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            end_date: new Date().toLocaleDateString()
          }
        }
        return task
      })
      setTasks(newTasks)
    }
  }
  
  return (
    <TaskStyled id={id} className="task-style">
        <p>{label}</p>
        <p>{description}</p>
          <div className="checkbox-container">
            <input type="checkbox" htmlFor="toCheck" value={endDate} onChange={handleChange} />
            <label className="checkbox-label" htmlFor="toCheck">{!isChecked ? "À terminer avant le "+ endDate : "Terminer le "+ endDate}</label>
          </div>
            <button className="delete-task"  onClick={() => handleDelete(id)}>Delete</button>
    </TaskStyled>
  )
}

export default Task

const TaskStyled = styled.div`
  border: 1px solid brown;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  padding-left: 20px;
  text-align: left;
  p:first-child {
    font-weight: bold;
  }
  .checkbox-container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .checkbox-label {
    margin-left: 10px;
  }
  .delete-task {
    display: block;
    margin: 10px auto;
  }

`