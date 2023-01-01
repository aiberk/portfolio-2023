import React from "react";
import Link from "next/link";
type Props = {};

function NotFound({}: Props) {
  return (
    <div>
      <h1 className="text-3xl">404</h1>
      <h2 className="text-xl">Ooops! This page cannot be found 😅</h2>
      <Link href={"/"}></Link>
    </div>
  );
}

export default NotFound;
