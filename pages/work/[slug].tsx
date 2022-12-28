import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { config } from "../../config";
import { ContentFulItem } from "../../types/types";
import { RichTextType } from "../../types/richTextTypes";
import Image from "next/image";
import Arrow from "../../components/ui-components/Arrow";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";

type Props = {
  item: string;
};

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "mdx",
    "sys.id": params.slug,
  });
  return {
    props: { mdx: items[0] },
  };
};

let randomColor = () => {
  const one = Math.floor(Math.random() * 250);
  const two = Math.floor(Math.random() * 250);
  const three = Math.floor(Math.random() * 250);
  const rgb = `rgb(${one},${two},${three})`;

  return rgb;
};

const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <div className="font-semibold">{text}</div>,
    [MARKS.ITALIC]: (text: string) => <div className="italic">{text}</div>,
    [MARKS.UNDERLINE]: (text: string) => (
      <div className="underline">{text}</div>
    ),
    [MARKS.CODE]: (text: string) => <div className="code">{text}</div>,
  },
  ///FIX FOR VIDEO
  renderNode: {
    [BLOCKS.HR]: (node, children) => (
      <hr
        className="w-full"
        // style={{ border: "10px solid green", borderRadius: "5px" }}
      ></hr>
    ),
    [BLOCKS.TABLE]: (node, children) => (
      <table
        className="w-full border-solid border-2 rounded-md"
        style={{ border: "solid 2px whitesmoke" }}
      >
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="p-2" style={{ borderBottom: "solid 2px whitesmoke" }}>
        {children}
      </tr>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="p-2">{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="p-2" style={{}}>
        {children}
      </th>
    ),

    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-left w-full">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-2xl text-left w-full">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className=" text-left w-full">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className=" text-left w-full">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className=" text-left w-full">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className=" text-left w-full">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className=" text-left w-full">{children}</h6>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol
        role="list"
        className="marker:text-sky-400 text-left w-full list-decimal"
      >
        {children}
      </ol>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul
        role="list"
        className="marker:text-sky-400 list-disc text-left w-full"
      >
        {children}
      </ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="text-left w-full flex flex-row ">
        &nbsp;-&nbsp;{children}
      </li>
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
    [INLINES.HYPERLINK]: (node, children) => (
      <Link className="font-semibold dark: text-blue-500" href={node.data.uri}>
        <u>
          {" "}
          <code>{children}</code>
        </u>
      </Link>
    ),

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need

      if (node.data.target.fields.file.contentType === "video/mp4") {
        return (
          <video controls src={`https://${node.data.target.fields.file.url}`} />
        );
      } else if (node.data.target.fields.file.contentType === "image/webp") {
        return (
          <Image
            className="border-0 ring-transparent"
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        );
      } else if (node.data.target.fields.file.contentType === "text/html") {
        return (
          // WBPrJSw7yQA
          // "WBPrJSw7yQA"

          <iframe
            width="100%"
            height="405"
            src={`https://www.youtube.com/embed/${node.data.target.fields.file.fileName}`}
            title="Learn TypeScript in 50 Minutes - Tutorial for Beginners"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
      <div className="w-full grid grid-colpb-1" style={{ gap: "2rem" }}>
        <div
          className="grid gri-col 
        "
          style={{ gap: "2rem" }}
        >
          {" "}
          <h1 className="text-6xl font-semibold tracking-tight">
            {fields.name}
          </h1>
          <h2 className="text-2xl">
            {" "}
            <span className="font-semibold text-2xl bg-clip-text light: text-red-500 dark:text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              TL;DR: &nbsp;{" "}
            </span>
            {fields.description}
          </h2>
        </div>
        <Image
          className="w-full shadow-xl rounded-lg"
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

// <iframe width="1279" height="719" src="https://www.youtube.com/embed/WBPrJSw7yQA" title="Learn TypeScript in 50 Minutes - Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// https://www.youtube.com/watch?v=JMsNslI8KoY
