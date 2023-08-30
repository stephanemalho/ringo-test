import { styled } from "styled-components";
import { TASK_CONTENT } from "../../../../../../constants/constants";

// eslint-disable-next-line react/prop-types
const TodoContent = ({ description , label }) => {
  return (
    <TodoContentStyled>
      <h3>Description de le tache:</h3>
      <p>{description}</p>
      <h3>{TASK_CONTENT.title}</h3>
      <p>{label}</p>
    </TodoContentStyled>
  );
};

export default TodoContent;

const TodoContentStyled = styled.div`
  padding-left:20px;
`