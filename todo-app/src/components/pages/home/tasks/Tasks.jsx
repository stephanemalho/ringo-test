/* eslint-disable react/prop-types */
const Tasks = ({ tasks }) => {

  

  return (
    <>
    {tasks.map((task) => (
      <div key={task.start_date}>
        <p>{task.label}</p>
        <p>{task.description}</p>
      </div>
    ))}
    </>
  )
}

export default Tasks