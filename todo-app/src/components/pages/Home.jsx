import { useEffect, useState } from "react";
import { getTasks } from "../../api/tasksAPI";

const Home = () => {
  // STATE
  
  const [tasks, setTasks] = useState({})
  console.log(tasks);
  const [newTask, setNewTask] = useState('')

  // BEHAVIOR
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }
  
  // JSX
  return (
    <div className="todo-container">
      <h1>Home</h1>
      <p>
        {tasks?.[0]?.label}
      </p>
      <input id="new-task" type="text" value={newTask} onChange={handleChange} />
    </div>
  )
}

export default Home