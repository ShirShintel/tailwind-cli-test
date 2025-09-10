import React from "react";
import "../styles/tailwind.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, id }: ButtonProps) {
  const baseClasses =
    "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
  const mergedClasses = className ? baseClasses + " " + className : baseClasses;

  return (
    <button
      // style={{ backgroundColor: "red" }}
      className={mergedClasses}
      id={id}
    ></button>
  );
}
