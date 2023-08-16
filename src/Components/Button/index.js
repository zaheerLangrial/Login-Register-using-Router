import React from "react";

const varients = {
  primary:
    "bg-blue-500 border border-black border-2 text-white hover:bg:blue-700 focus:ring-indego-600",
  denger: "bg-red-600 text-black hover:enabled:bg:red-700 focus:ring-red-500",
  naked: "hover:text-gray-600 text-gray-500 shadow-none",
};

const sizes = {
  small: "px-2 py-1 text-xs leading-1",
  madium: "px-4 py-2 text-sm",
  large: "px-4 py-2 text-base",
};

export const Button = (
  //className,
  //varient = "primary",
  //size = "large",
  props
  
) => {

  const {children , className , varient = "primary" , size="small"} = props
  return (
    // <button> </button>
    <button
      className={`inline-flex justify-center items-center border border-transparent rounded-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:curser-not-allowed 
        ${className}
        ${varients[varient]}
        ${sizes[size]}
        `}
      //{...props}
    >
      {children}
      </button>

  );
};
