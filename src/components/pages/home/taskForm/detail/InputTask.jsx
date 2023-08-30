import { formatDateToStandard } from "../../../../../utils";

// eslint-disable-next-line react/prop-types
const InputTask = ({ value, onChange, type, placeholder, name }) => {
  let formattedValue = value;

  if (name === "end_date" || name === "start_date") {
    formattedValue = formatDateToStandard(value);
    console.log("InputTask",formattedValue);
  }

  return (
    <div className="field">
      <label htmlFor={name}>{name}</label>
      <input
        required
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={formattedValue}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTask;
