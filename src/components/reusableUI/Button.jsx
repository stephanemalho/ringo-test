import { styled } from "styled-components";
import { theme } from "../../theme";

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  padding: 12px 24px;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.purple};
  border: none;
  color: ${theme.colors.white};
`;
