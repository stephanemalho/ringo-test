// eslint-disable-next-line react/prop-types
const InputTask = ({ value, onChange, type, placeholder, name }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{name}</label>
      <input
        required
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTask;
