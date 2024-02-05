import style from "./FormInput.module.css";
import { useState } from "react";
export default function FormInput({
  user,
  setUser,
  name,
  title,
  placeholder,
  type,
  pattern,
  required,
  error,
}) {
  const [focused, setFocused] = useState(false);
  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    console.log(user);
  };

  function handleFocus() {
    setFocused(true);
  }
  return (
    <div className={style.formInput}>
      <label>{title}</label>
      <input
        type={type}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />

      <span>{error}</span>
    </div>
  );
}
