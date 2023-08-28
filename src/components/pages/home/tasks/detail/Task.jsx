import { useState } from "react";
import { styled } from "styled-components";
import { MdSystemUpdateAlt } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const Task = ({ label, description, endDate, id, tasks, setTasks }) => {
  const [isTodo, setIsTodo] = useState(false);
  const [previousEndDate, setPreviousEndDate] = useState(endDate);

  const handleDelete = () => {
    const taskCopy = [...tasks];
    const newTasksFiltered = taskCopy.filter((task) => task.id !== id);
    setTasks(newTasksFiltered);
  };

  const handleUpdate = () => {
    

      


  };

  const handleChange = () => {
    setIsTodo(!isTodo);
    const taskCopy = [...tasks];
    const newTasks = taskCopy.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          end_date: isTodo ? previousEndDate : new Date().toLocaleDateString()
        };
      }
      return task;
    });

    setTasks(newTasks);
    if (isTodo) {
      setPreviousEndDate(previousEndDate);
    }
  };

  return (
    <TaskStyled id={id} className="task-style">
    
      <MdSystemUpdateAlt className="edit-task" onClick={handleUpdate} />
      <p className={isTodo ? "task-p__checked" : "" }>{label}</p>
      <p className={isTodo ? "desc-p__done" : "desc-p__todo"}>{isTodo ? "Bravo d'avoir accomplis votre devoir 🎉" : description }</p>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id={id}
          value={endDate}
          onChange={handleChange}

        />
        <label htmlFor={id} className="checkbox-label">
          {isTodo
            ? "Terminer le " + endDate
            : "À terminer avant le " + endDate }
        </label>
      </div>
      <button className="delete-task" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </TaskStyled>
  );
};

export default Task;

const TaskStyled = styled.div`
  border: 1px solid brown;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  padding-left: 20px;
  text-align: left;

  .task-p:first-child {
    font-weight: bold;
  }
  .desc-p__todo {
    font-style: normal;
    height:30px;
  }
  .desc-p__done {
    font-style: italic;
    color: green;
    height:30px;
  }
  .task-p__checked {
    text-decoration: line-through;
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
`;
