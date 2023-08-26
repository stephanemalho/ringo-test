// eslint-disable-next-line react/prop-types
const InputsTask = ({ value, onChange, labelValue, id, type, name, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{labelValue}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputsTask;