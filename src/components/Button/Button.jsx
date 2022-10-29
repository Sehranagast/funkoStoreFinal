import React from "react";
import "./Button.css";

const Button = ({ text, onClick, className, type = "primary" }) => {
  return (
    <button onClick={onClick} className={`button ${type} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
