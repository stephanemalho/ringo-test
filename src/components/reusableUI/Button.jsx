import { styled } from "styled-components";
import { theme } from "../../theme";

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick, ...restProps }) => {
  return (
    <ButtonStyled onClick={onClick} {...restProps}>
      {label}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  padding: 6px 36px;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.purple};
  border: none;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P0};
  line-height: 24px;
`;
