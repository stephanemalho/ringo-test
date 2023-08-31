import { styled } from "styled-components";
import { TASK_CONTENT } from "../../../../../../constants/constants";

// eslint-disable-next-line react/prop-types
const TodoContent = ({ description, label }) => {
  return (
    <TodoContentStyled>
      <p>{label}</p>
      <p>{description}</p>
    </TodoContentStyled>
  );
};

export default TodoContent;

const TodoContentStyled = styled.div`
  padding-left: 20px;
`;
