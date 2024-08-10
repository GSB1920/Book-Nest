import React from "react";

interface ButtonProps {
    children: React.ReactNode;
  }

const Button = ({children} : ButtonProps) =>{
   return(
    <button type="button" className="text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">{children}</button>
   )
}

export default Button
