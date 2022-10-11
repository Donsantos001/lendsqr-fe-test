import { InputHTMLAttributes, useState } from "react";
import "./Input.scss";
type Props = {};

const Input = ({
  disabled,
  type = "text",
  value,
  className,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-input-con">
      <input
        {...props}
        disabled={disabled}
        type={showPassword ? "text" : type || "text"}
        value={value || ""}
        className={`form-input${className ? " " + className : ""}${
          type === "password" ? " password" : ""
        }`}
      />

      {type === "password" && (
        <span onClick={toggleShow} className="toggle-show">
          {showPassword ? "HIDE" : "SHOW"}
        </span>
      )}
    </div>
  );
};

export default Input;
