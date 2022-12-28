import React from "react";
import Head from "next/head";
import { ContentFulItem } from "../../types/types";

type Props = {
  item: ContentFulItem;
};

const CustomHead = ({ item }: Props) => {
  const { name, description, tags, thumbnail } = item.fields;
  return (
    <Head>
      <title>{`${name} by Aby Iberkleid`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Abraham 'Aby' Iberkleid's Portfolio" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https:${thumbnail.fields.file.url}`}
      />
      <meta
        property="og:image:alt"
        content={`Selected User Interface screenshot from  ${description}`}
      />
      <meta property="og:url" content={`abyiber.com/work/${name}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="abyiber.com" />
      <meta
        name="keywords"
        content="Software Development, Front-End, UX Design, Software Engineer, Product Designer, Full Stack Development"
      />
    </Head>
  );
};

export default CustomHead;
