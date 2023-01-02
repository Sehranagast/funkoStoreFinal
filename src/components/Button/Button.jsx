import React from "react";
import "./Button.css";

const Button = ({
  text,
  onClick,
  className,
  type = "primary",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${type} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
