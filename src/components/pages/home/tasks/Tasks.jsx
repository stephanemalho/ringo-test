import { fakeTasks } from "../../../../Data/fakeTasks";
import Task from "./detail/Task";

/* eslint-disable react/prop-types */
const Tasks = ({setTasks}) => {

  return (
    <>
    {fakeTasks.LARGE.map((task) => (
      <Task setTasks={setTasks} key={task.id} id={task.id} label={task.label} description={task.description} endDate={task.end_date} />
    ))}
    </>
  )
}

export default Tasks

