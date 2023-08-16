import React from "react";


export const Input = (props) => {
    const { type , name , inputId , className , defaultValue , label} = props
    return (
        <div>
            {label && <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{label}</label>}

            {/* {HyperText && (<label className="text-gray-600 text-sm">{label}</label>)} */}

{/* peer placeholder-transparent */}
            <input 
            type={type}
            name={name}
            id={inputId}
            className={"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"}
            defaultValue={defaultValue}
            >
                {/* {children} */}
            </input>
            {/* <p className="text-red">{error}</p> */}

        </div>
    )
}