import "./TextInput.css";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  style,
  placeholder,
  pattern,
  required = false,
  type = "text",
}) => {
  return (
    <div className="textInput__input-group">
      <label htmlFor={name} className="textInput__input-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className="textInput__input-text"
        onChange={onChange}
        style={style}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
      />
    </div>
  );
};

export { TextInput };
