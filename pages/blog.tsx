import { createClient } from "contentful";
import { GetStaticProps } from "next";
import { config } from "../config";
import { ContentFulItem } from "../types/types";
import CustomMainPagesHead from "../components/shared-components/CustomMainPagesHead";

type Props = {
  mdx: Array<ContentFulItem>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: config.spaceId,
    accessToken: config.apiKey,
  });

  const res = await client.getEntries({ content_type: "blogPosts" });
  return { props: { mdx: res.items } };
};

export default function Home({ mdx }: Props) {
  return (
    <>
      <CustomMainPagesHead
        name={"Abraham Iberkleid's "}
        type={"Blog"}
      ></CustomMainPagesHead>
      <main className="grid grid-cols-1 place-content-between gap-12">
        <h1>Blog</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-8">
          {mdx.map((item) => (
            <h1 key={item.sys.id}>{item.fields.name}</h1>
          ))}
        </section>
      </main>
    </>
  );
}
