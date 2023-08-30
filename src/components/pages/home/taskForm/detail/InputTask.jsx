import { styled } from "styled-components";
import { formatDateToStandard } from "../../../../../utils";
import { theme } from "../../../../../theme";

// eslint-disable-next-line react/prop-types
const InputTask = ({ value, onChange, type, placeholder, name }) => {
  let formattedValue = value;

  if (name === "end_date" || name === "start_date") {
    formattedValue = formatDateToStandard(value);
    console.log("InputTask", formattedValue);
  }

  return (
    <InputTaskStyled className="field">
      <input
        required
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={formattedValue}
        onChange={onChange}
      />
    </InputTaskStyled>
  );
};

export default InputTask;

const InputTaskStyled = styled.div`
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

    &::placeholder {
      color: ${theme.colors.grey};
    }
  }
`;
