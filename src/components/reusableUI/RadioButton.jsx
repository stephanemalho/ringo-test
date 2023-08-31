/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { theme } from "../../theme";

const RadioButton = ({
  type,
  onChange,
  icon,
  id,
  container,
  inputRadioStyle,
  labelRadioStyle,
  indicatorChecked,
  checked,
}) => {
  return (
    <RadioButtonStyled>
      <div className={container}>
        <input
          type={type}
          onChange={onChange}
          icon={icon}
          id={id}
          className={inputRadioStyle}
          checked={checked}
        />
        <label htmlFor={id} className={labelRadioStyle}>
          <div className={indicatorChecked}>{icon}</div>
        </label>
      </div>
    </RadioButtonStyled>
  );
};

export default RadioButton;

const RadioButtonStyled = styled.div`
  // box-btn
  display: flex;
  flex-direction: column;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  width: 20px;
  background-color: ${theme.colors.greyDark};

  // build a black radio button with a white indicator
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    border: 1px solid #d1dce6;
    box-shadow: 4px 4px 4px 0 #d1dce6 inset, -4px -4px 4px 0 #ffffff inset;
    transition: all 0.2s ease-in-out;
  }
  .radio-btn-hide {
    display: none;
  }
  .label-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    border: 1px solid #d1dce6;
    box-shadow: 4px 4px 4px 0 #d1dce6 inset, -4px -4px 4px 0 #ffffff inset;
    transition: all 0.2s ease-in-out;
  }
  .indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    border: 1px solid #d1dce6;
    transition: all 0.2s ease-in-out;
  }
  .radio-btn-hide:checked + .label-plus-btn .indicator {
    background-color: #d1dce6;
    box-shadow: inset 2px 2px 2px 0 #ffffff, inset -2px -2px 2px 0 #d1dce6;
  }
  .radio-btn-hide:checked + .label-plus-btn .indicator::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d1dce6;
    box-shadow: inset 2px 2px 2px 0 #ffffff, inset -2px -2px 2px 0 #d1dce6;
  }
  .radio-btn-hide:checked + .label-btn .indicator::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d1dce6;
    box-shadow: inset 2px 2px 2px 0 #ffffff, inset -2px -2px 2px 0 #d1dce6;
  }
`;
