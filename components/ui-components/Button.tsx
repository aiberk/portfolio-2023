import { MouseEventHandler } from "react";

type Props = {
  children?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
};

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
