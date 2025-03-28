"use client"
import { twMerge } from "tailwind-merge";

const IconButton = ({ onClick, children, className }) => {
  
  return (
    <button
      className={twMerge('relative p-4 rounded-full text-white hover:bg-gray-100 hover:bg-opacity-10 transition duration-300 focus:outline-none overflow-hidden cursor-pointer', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
