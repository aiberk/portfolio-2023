import React from "react";
import Head from "next/head";

type CustomMainPagesHeadProps = {
  name: string;
  type: string;
};

const CustomMainPagesHead = ({ name, type }: CustomMainPagesHeadProps) => {
  return (
    <Head>
      <title>
        {name}
        {type}
      </title>
      <meta name="description" content={`${name} ${type}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Software Development, Front-End, UX Design, Software Engineer, Product Designer, Full Stack Development"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={`${name} ${type}`} />
      <meta property="og:description" content={`${name} ${type}`} />
      <meta property="og:image" content="../public/facvicon.png" />
      <meta property="og:image:alt" content="Aby Iberkleid Logo" />
      <meta property="og:url" content="abyiber.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="abyiber.com" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@abyiberkleid" />
      <meta name="twitter:title" content={`${name} ${type}`} />
      <meta name="twitter:description" content={`${name} ${type}`} />
      <meta name="twitter:image" content="../public/favicon.png" />
    </Head>
  );
};

export default CustomMainPagesHead;
