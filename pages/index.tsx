import { GetStaticProps } from "next";
import { createClient } from "contentful";
import { ContentFulItem } from "../types/types";
import Card from "../components/ui-components/Card";
import EntryFilter from "../components/shared-components/EntryFilter";
import Hero from "../components/ui-components/Hero";
import { config } from "../config";
import CustomMainPagesHead from "../components/shared-components/CustomMainPagesHead";

type Props = {
  mdx: Array<ContentFulItem>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = createClient({
    space: config.spaceId,
    accessToken: config.apiKey,
  });

  const res = await client.getEntries({ content_type: "mdx" });
  const mdx = res?.items ?? [];
  return { props: { mdx } };
};

export default function Home({ mdx }: Props) {
  const sorted = EntryFilter(mdx);

  return (
    <>
      <CustomMainPagesHead
        name={"Abraham Iberkleid's "}
        type={"Porfolio"}
      ></CustomMainPagesHead>
      <main className="grid grid-cols-1 place-content-between gap-12">
        <Hero />
        <section className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-8">
          {sorted.map((item) => (
            <Card key={item.sys.id} item={item} />
          ))}
        </section>
      </main>
    </>
  );
}
