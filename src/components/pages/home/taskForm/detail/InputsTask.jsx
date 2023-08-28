// eslint-disable-next-line react/prop-types
const InputsTask = ({ onChange, value, labelValue, type, name, placeholder }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{labelValue}</label>
      <input id={name} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputsTask;