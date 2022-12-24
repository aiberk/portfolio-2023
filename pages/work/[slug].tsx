import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { config } from "../../config";
import { ContentFulItem } from "../../types/types";
import { RichTextType } from "../../types/richTextTypes";

const client = createClient({
  space: config.spaceId,
  accessToken: config.apiKey,
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

// export type Props = {
//   children: any;
// };

const renderOptions = {
  ///FIX FOR VIDEO
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <video
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            title={node.data.target.fields.title}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need

      if (node.data.target.fields.file.contentType === "video/mp4") {
        return (
          <video controls src={`https://${node.data.target.fields.file.url}`} />
        );
      } else if (node.data.target.fields.file.contentType != "video/mp4") {
        return (
          <img
            className="border-0"
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
          />
        );
      }
    },
  },
};

export default function Work({ mdx }) {
  const { fields, sys } = mdx;
  console.log(fields.richText);
  return (
    <>
      <div className="border-0 ring-transparent">
        {documentToReactComponents(fields.richText, renderOptions)}
      </div>
    </>
  );
}

// http://localhost:3000/work/1MHYFjc42C60nHqyeX3ZGv
//[0].fields.richText
// http://localhost:3000/work/3t0TpvPZnFD6rApqrS2ASZ
// https:////videos.ctfassets.net/9ml0r0lfbqrn/1J6yhZzWqpPydHhtJaAI6T/475cba757bda354ab7b928ed48112191/hw4-test0000-0701.mp4
