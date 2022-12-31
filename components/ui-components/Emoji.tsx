import React from "react";

type Props = {
  label: string;
  symbol: string;
};

const Emoji = (props: Props) => {
  return (
    <span
      className="emoji p-1 text-lg hidden md:inline-flex"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};

export default Emoji;
