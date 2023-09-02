/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components";
import TodoContent from "./detail/TodoContent";
import { useContext, useState } from "react";
import TaskContext from "../../../../../context/TaskContext";
import { filterTasks, hasEndDate } from "../../../../../utils";
import { FiTrash2 } from "react-icons/fi";
import RadioButton from "../../../../reusableUI/RadioButton";
import { theme } from "../../../../../theme";

// eslint-disable-next-line react/prop-types
const Task = ({ label, description, startDate, endDate }) => {
  const { tasks, setTasks, handleDelete } = useContext(TaskContext);
  const [isTodoDone, setIsTodoDone] = useState(hasEndDate(endDate));

  const onClickCheckbox = (taskLabel) => {
    setIsTodoDone((prevIsTodoDone) => !prevIsTodoDone);
    filterTasks(tasks, taskLabel, setTasks);
  };

  return (
    <TaskStyled>
      <RadioButton
        id={label}
        type="radio"
        onChange={() => onClickCheckbox(label)}
        container="btn-groupe"
        inputRadioStyle="radio-btn-hide"
        labelRadioStyle="label-btn"
        indicatorChecked="indicator"
        checked={hasEndDate(endDate) ? true : false}
      />
      <TodoContent
        label={label}
        description={description}
        startDate={startDate}
        endDate={endDate}
        isTodoDone={isTodoDone}
        setIsTodoDone={setIsTodoDone}
      />
      <div className="icon-container">
        <FiTrash2
          size={20}
          className="icon"
          onClick={() => handleDelete(label)}
        />
      </div>
    </TaskStyled>
  );
};

export default Task;

const TaskStyled = styled.div`
  background: ${theme.colors.greyDark};
  display: grid;
  grid-template-columns: 52px 200px 1fr;
  margin-bottom: 20px;
  padding: 12px 16px;

  .icon-container {
    /* border: 1px solid blue; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      color: red;
      &:hover {
        color: white;
      }
      &:active {
        color: red;
      }
    }
  }
`;
