import React from "react";
import Link from "next/link";
type Props = {};

function NotFound({}: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="md:text-9xl">404</h1>
      <h2 className="md:text-5xl">Ooops! This page cannot be found 😅</h2>
      <Link className="md:text-3xl text-blue-500" href={"/"}>
        {" "}
        Go back to abyiber.com
      </Link>
    </div>
  );
}

export default NotFound;
