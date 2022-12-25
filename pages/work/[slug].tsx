import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { config } from "../../config";
import { ContentFulItem } from "../../types/types";
import { RichTextType } from "../../types/richTextTypes";
import Image from "next/image";
import Arrow from "../../components/ui-components/Arrow";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";

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

let randomColor = () => {
  let one = Math.floor(Math.random() * 250);
  let two = Math.floor(Math.random() * 250);
  let three = Math.floor(Math.random() * 250);
  let rgb = `rgb(${one},${two},${three})`;

  return rgb;
};

const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <div className="font-semibold">{text}</div>,
    [MARKS.ITALIC]: (text) => <div className="italic">{text}</div>,
    [MARKS.UNDERLINE]: (text) => <div className="underline">{text}</div>,
    [MARKS.CODE]: (text) => <div className="code">{text}</div>,
  },
  ///FIX FOR VIDEO
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <div className="text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <div id={`${children}`} className="text-2xl text-left w-full">
        {children}
      </div>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <div className=" text-left w-full">{children}</div>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <div className=" text-left w-full list-none">{children}</div>
    ),
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
            className="border-0 ring-transparent"
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
          />
        );
      }
    },
  },
};

export default function Work({ mdx }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const { fields, sys } = mdx;
  console.log(fields.richText);

  return (
    <>
      <Link
        href={"/"}
        className="text-lg flex flex-row  gap-2 items-center mb-6 pb-2 font-semibold border-zinc-700"
        style={{ marginBottom: "4rem", marginTop: "2rem" }}
      >
        <Arrow /> Back to Work
      </Link>
      <div className="w-full grid grid-col gap-2 pb-1">
        <div className="grid gri-col gap-2">
          {" "}
          <h1 className="text-6xl ">{fields.name}</h1>
          <h2 className="text-2xl">
            {" "}
            <span className="font-semibold text-2xl text-red-500">
              TL;DR: &nbsp;{" "}
            </span>
            {fields.description}
          </h2>
        </div>
        <Image
          className="w-full  shadow-md shadow-gray-300 rounded-lg"
          src={`https:${fields.thumbnail.fields.file.url}`}
          alt={`${fields.name} thumbnail image`}
          width={fields.thumbnail.fields.file.details.image.width}
          height={fields.thumbnail.fields.file.details.image.height}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
          placeholder="blur"
        ></Image>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <main style={{ maxWidth: "100%" }}>
          <br />
        </main>
        <div
          className="border-0 ring-transparent flex flex-col justify-center items-center gap-2"
          style={{ maxWidth: "45rem" }}
        >
          {documentToReactComponents(fields.richText, renderOptions)}
        </div>
      </div>
    </>
  );
}

// http://localhost:3000/work/1MHYFjc42C60nHqyeX3ZGv
//[0].fields.richText
// http://localhost:3000/work/3t0TpvPZnFD6rApqrS2ASZ
// https:////videos.ctfassets.net/9ml0r0lfbqrn/1J6yhZzWqpPydHhtJaAI6T/475cba757bda354ab7b928ed48112191/hw4-test0000-0701.mp4
