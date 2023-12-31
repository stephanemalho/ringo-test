/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Input from "../../../reusableUI/Input";
import TaskContext from "../../../../context/TaskContext";
import { EMPTY_TASK } from "../../../../constants/constants";
import { formatDateToUTC } from "../../../../utils";
import { getTextInputsConfig } from "./detail/inputsConfig";
import { createTask } from "../../../../api/tasksAPI";
import styled from "styled-components";
import Button from "../../../reusableUI/Button";
import { theme } from "../../../../theme";

const Form = () => {
  // STATE
  const [inputValue, setInputValue] = useState(EMPTY_TASK);
  const { handleAdd } = useContext(TaskContext);

  //COMPORTEMENTS
  const handleCreateTask = async (event) => {
    event.preventDefault();
    await createTask(inputValue);

    const newStartDate = new Date().toString();
    const newTask = {
      ...inputValue,
      start_date: formatDateToUTC(newStartDate),
      end_date: "",
    };

    handleAdd(newTask);
    setInputValue(EMPTY_TASK);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
      start_date: formatDateToUTC(new Date()),
    }));
  };

  const inputsConfig = getTextInputsConfig(inputValue);

  // JSX
  return (
    <FormStyled action="submit" onSubmit={handleCreateTask}>
      {inputsConfig.map((input) => {
        return (
          <Input
            {...input}
            key={input.name}
            value={input.value}
            onChange={handleChange}
          />
        );
      })}
      <div className="button-container">
        <Button label={"Ajouter"} color={theme.colors.purple} />
      </div>
    </FormStyled>
  );
};

export default Form;

const FormStyled = styled.form`
  /* background: yellow; */
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 16px;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
