import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const DescriptionTodo = ({ description }) => {
  return (
    <DescriptionTodoStyled>
      <h3>Description de le tache:</h3>
      <p>{description}</p>
    </DescriptionTodoStyled>
  );
};

export default DescriptionTodo;

const DescriptionTodoStyled = styled.div`
  padding-left:20px;
`