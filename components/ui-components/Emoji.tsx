import React from "react";

type Props = {};

const Emoji = (props: Props) => {
  return (
    <span
      className="emoji p-1 text-xl"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};

export default Emoji;

// import React from 'react';
// const Emoji = props => (
//     <span
//         className="emoji"
//         role="img"
//         aria-label={props.label ? props.label : ""}
//         aria-hidden={props.label ? "false" : "true"}
//     >
//         {props.symbol}
//     </span>
// );
// export default Emoji;
