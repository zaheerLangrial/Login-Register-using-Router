import React from "react";

const varients = {
  primary: "text-white bg-green-500 hover:text-white hover:bg-blue-500",
  denger: "text-white bg-red-400 hover:text-white hover:bg-red-600",
  naked: "text-white bg-gray-400 hover:text-white hover:bg-gray-600",
};

const sizes = {
    small : "px-2 py-1 text-xs leading-1",
    medium : "px-4 py-2 text-sm",
    large : "px-4 py-2 text-base "
}

function Button1(props) {
  const { children, className, varient = "primary" , size = "small" } = props;
  return (
    <button
      className={` rounded-md font-medium shadow-sm ${className} ${varients[varient]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}
export default Button1;
