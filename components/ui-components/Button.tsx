import { Component, MouseEventHandler, ReactComponentElement } from "react";

type Props = {
  children?: string | ReactComponentElement<any>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
};

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      className={`p-2 rounded-md hover:opacity-9 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
