import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="font-semibold">
        {/* <span className="boldest ">design</span>. */}
        <span className="bold">abyiber.com</span>
      </Link>
    </div>
  );
};

export default Logo;
