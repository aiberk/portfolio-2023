import React from "react";
import { IconStrokeWidth } from "../../types/types";

const Hamburger = (props: IconStrokeWidth) => {
  return (
    <svg
      className="h-6 w-6 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
};

export default Hamburger;
