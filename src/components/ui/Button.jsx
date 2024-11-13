import React from "react";

const Button = (props) => {
  return (
    <a
      className={`p-4 py-2 font-medium rounded-lg shadow-sm hover:shadow-lg ${props.color} ${props.textColor} transition-all ease-in-out duration-300`}
      href={props.to}
    >
      {props.text}
    </a>
  );
};

export default Button;
