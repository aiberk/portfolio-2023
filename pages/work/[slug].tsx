import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { config } from "../../config";
import { ContentFulItem, RichText } from "../../types/types";
import Image from "next/image";
import Arrow from "../../components/ui-components/Arrow";
import { useTheme } from "next-themes";
import { renderOptionsForContentful } from "../../components/utils/renderOptions";
import CustomHead from "../../components/shared-components/CustomHead";
import { param } from "cypress/types/jquery";
import GithubIcon from "../../components/ui-components/GithubIcon";
import LinkIcon from "../../components/ui-components/LinkIcon";

type Props = {
  mdx: ContentFulItem;
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
      params: { slug: item.fields.name },
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
    "fields.name": params.slug,
  });
  // console.log(items);

  return {
    props: { mdx: items[0] },
  };
};

export default function Work({ mdx }: Props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const { fields, sys } = mdx;

  return (
    <>
      <CustomHead item={mdx} />
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
        }}>
        <Arrow /> Back to Work
      </Link>
      <div className="w-full grid grid-col-1" style={{ gap: "2rem" }}>
        <div
          className="grid gri-col 
        "
          style={{ gap: "2rem" }}>
          {" "}
          <h1
            className="font-semibold tracking-tight"
            style={{ fontSize: "3.7rem", lineHeight: "1" }}>
            {fields.name}
          </h1>
          <div className="flex flex-row max-w-sm gap-2">
            {fields.githubUrl && (
              <a
                href={fields.githubUrl}
                target="_blank"
                aria-label="Github"
                className="flex rounded-md flex-row justify-center items-center gap-2 border border-gray-600 p-2"
                style={{ width: "200px" }}>
                Go to Repo
                <GithubIcon />
              </a>
            )}

            {fields.demoUrl && (
              <a
                href={fields.demoUrl}
                target="_blank"
                aria-label="Github"
                className="flex rounded-md flex-row justify-center items-center gap-2 border border-gray-600 p-2"
                style={{ width: "200px" }}>
                Demo
                <LinkIcon />
              </a>
            )}
          </div>
          <h2 className="text-2xl">
            {" "}
            <span className="font-semibold text-2xl bg-clip-text light: text-red-500 dark:text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              TL;DR: &nbsp;{" "}
            </span>
            {fields.designTldr}
          </h2>
        </div>
        <Image
          className="w-full shadow-xl rounded-lg mb-10"
          src={`https:${fields.thumbnail.fields.file.url}`}
          alt={`${fields.name} thumbnail image`}
          width={fields.thumbnail.fields.file.details.image.width}
          height={fields.thumbnail.fields.file.details.image.height}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADDCAYAAAA4GCyWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7dQBDQAgEAAhtX9aP4DmuA1CsO/MWwABZwFECAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvI+B7+BV1lZwUWAAAAAElFTkSuQmCC"
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"></Image>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <main style={{ maxWidth: "100%" }}>
          <br />
        </main>
        <div
          className="border-0 ring-transparent flex flex-col justify-center items-center gap-2 mt-11"
          style={{ maxWidth: "45rem" }}>
          {documentToReactComponents(
            fields.designRichText,
            renderOptionsForContentful
          )}
        </div>
      </div>
    </>
  );
}
