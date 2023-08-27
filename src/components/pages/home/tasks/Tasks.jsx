import { fakeTasks } from "../../../../fakeTasks";
import Task from "./detail/Task";

/* eslint-disable react/prop-types */
const Tasks = () => {

  return (
    <>
    {fakeTasks.SMALL.map((task) => (
      <Task key={task.key} label={task.label} description={task.description} endDate={task.end_date} />
    ))}
    </>
  )
}

export default Tasks

