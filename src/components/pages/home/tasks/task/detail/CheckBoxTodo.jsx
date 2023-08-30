import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const CheckBoxTodo = ({ id, onClickCheckbox }) => {

  const handleChange = () => {
    onClickCheckbox(id);
  };

  return (
    <CheckBoxTodoStyled>
      <button id={id} onClick={handleChange} >
        O
      </button>
    </CheckBoxTodoStyled>
  );
};

export default CheckBoxTodo;

const CheckBoxTodoStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  .checkbox-label {
    margin-left: 10px;
  }
  padding-left: 20px;
  .desc-p__todo {
    display: none;
  }
  .desc-p__done {
    font-style: italic;
    color: green;
    height: 30px;
    position: absolute;
    top: -10px;
    right: 55px;
  }
`;

// function newTaskValue(
//   tasks,
//   label,
//   setTasks,
// ) {
//   const taskCopy = [...tasks];
//   const newTasks = taskCopy.map((task) => {
//     if (task.label === label) {
//       return {
//         ...task,
//         end_date: new Date().toLocaleDateString(),
//       };
//     }
//     console.log("task dans newTaskValue:", task);
//     return task;
//   });

//   setTasks(newTasks);
// }
