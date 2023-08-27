import Task from "./detail/Task";

/* eslint-disable react/prop-types */
const Tasks = ({tasks, setTasks}) => {

  return (
    <>
    {tasks.map((task) => (
      <Task setTasks={setTasks} tasks={tasks} key={task.id} id={task.id} label={task.label} description={task.description} endDate={task.end_date} />
    ))}
    </>
  )
}

export default Tasks

