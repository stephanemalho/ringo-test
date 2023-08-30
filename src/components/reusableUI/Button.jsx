import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const Button = ({ logo , onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {logo}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.div`
  display: flex;
  margin-left: auto;
  width: 60px;
  background-color: white;
  position: relative;
  border-radius: 0 10px 10px 0;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: red;
    transition: 0.5s;
  }
  .delete-task {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    color: white;
    background-color: transparent;
    &:hover {
      color: white;
      transition: 0.5s;
    }
  }
`;
