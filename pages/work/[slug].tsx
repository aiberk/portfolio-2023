import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: "9ml0r0lfbqrn",
  accessToken: "M1Y1hUxpPygdvCWHH2vymNeeSJb2SYqLiTTgZHgTHmg",
});

// Create inidivual paths
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "mdx",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.sys.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

// Get content for individual pages
// 1MHYFjc42C60nHqyeX3ZGv
// 3t0TpvPZnFD6rApqrS2ASZ
// export const getStaticProps: GetStaticProps = async ({ params }) => {
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "mdx",
    "sys.id": params.slug,
  });
  return {
    props: { mdx: items[0] },
  };
}

export type Props = {
  children: any;
};

export default function Work({ mdx }) {
  const { fields, sys } = mdx;
  console.log(mdx);
  return (
    <>
      <div>{documentToReactComponents(fields.richText)}</div>
    </>
  );
}

// http://localhost:3000/work/1MHYFjc42C60nHqyeX3ZGv
//[0].fields.richText
// http://localhost:3000/work/3t0TpvPZnFD6rApqrS2ASZ
