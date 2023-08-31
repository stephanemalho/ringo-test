import { styled } from "styled-components";
import { theme } from "../../theme";

// eslint-disable-next-line react/prop-types
const Input = ({ value, onChange, type, placeholder, name }) => {
  let formattedValue = value;

  return (
    <InputStyled className="field">
      <input
        required
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={formattedValue}
        onChange={onChange}
      />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div`
  /* border: 1px solid red; */
  width: 100%;

  input {
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    background: ${theme.colors.greyDark};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};

    &::placeholder {
      color: ${theme.colors.grey};
    }
  }
`;
