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
      <meta property="og:title" content={`${name} by Aby Iberkleid`} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image:secure_url"
        content={`https:${thumbnail.fields.file.url}`}
      />
      <meta
        property="og:image:alt"
        content={`Selected User Interface screenshot from  ${name}`}
      />
      <meta property="og:url" content={`abyiber.com/work/${name}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="abyiber.com" />
      <meta
        name="keywords"
        content="Software Development, Front-End, UX Design, Software Engineer, Product Designer, Full Stack Development"
      />

      <meta name="twitter:card" content={description} />
      <meta property="twitter:domain" content={`abyiber.com/`} />
      <meta property="twitter:url" content={`abyiber.com/work/${name}`} />
      <meta name="twitter:title" content={`${name} by Aby Iberkleid`} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https:${thumbnail.fields.file.url}`}
      />
    </Head>
  );
};

export default CustomHead;
