import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { config } from "../../config";
import { ContentFulItem } from "../../types/types";
import { RichTextType } from "../../types/richTextTypes";
import Image from "next/image";
import Arrow from "../../components/ui-components/Arrow";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import { renderOptionsForContentful } from "../../components/utils/renderOptions";

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

export default function Work({ mdx }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const { fields, sys } = mdx;
  console.log(fields.richText);

  return (
    <>
      <Link
        href={"/"}
        className="text-lg flex flex-row  gap-2 items-center mb-6 pb-2 font-semibold  text-black "
        style={{
          marginBottom: "4rem",
          marginTop: "2rem",
          border: "1px solid lightgray",
          width: "10rem",
          padding: "0.4rem",
          borderRadius: "5px",
        }}
      >
        <Arrow /> Back to Work
      </Link>
      <div className="w-full grid grid-col-1" style={{ gap: "2rem" }}>
        <div
          className="grid gri-col 
        "
          style={{ gap: "2rem" }}
        >
          {" "}
          <h1
            className="font-semibold tracking-tight"
            style={{ fontSize: "3.7rem", lineHeight: "1" }}
          >
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
          priority
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
          {documentToReactComponents(
            fields.richText,
            renderOptionsForContentful
          )}
        </div>
      </div>
    </>
  );
}
