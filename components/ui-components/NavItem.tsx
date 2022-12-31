import React from "react";
import Emoji from "./Emoji";
import Link from "next/link";
import Button from "./Button";
import { NavItem } from "../../types/types";

const NavItem = (props: NavItem) => {
  return (
    <li className="p-2">
      <Link
        className={`font-semibold md:p-2 m-1 rounded-md block hover:bg-gray-100 hover:text-black`}
        href={props.path}
        key={props.path + props.label + props.emoji}
      >
        {props.label}
        {/* <Emoji symbol={props.emoji} label={props.label} /> */}
      </Link>
    </li>
  );
};

export default NavItem;
