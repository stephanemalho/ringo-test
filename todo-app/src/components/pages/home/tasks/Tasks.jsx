import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
const Tasks = ({ tasks }) => {

  return (
    <>
    {tasks.map((task) => (
      <div key={uuidv4()}>
        <p>{task.label}</p>
        <p>{task.description}</p>
      </div>
    ))}
    </>
  )
}

export default Tasks