import { GetStaticProps } from "next";
import Head from "next/head";
import { createClient } from "contentful";
import { ContentFulItem } from "../types/types";
import Card from "../components/ui-components/Card";
import EntryFilter from "../components/shared-components/EntryFilter";
import Hero from "../components/ui-components/Hero";
import { config } from "../config";

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
      <Head>
        <title>Abraham Aby Iberkleid's Portfolio</title>
        <meta
          name="description"
          content="Abraham 'Aby' Iberkleid's Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Software Development, Front-End, UX Design, Software Engineer, Product Designer, Full Stack Development"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Aby Iberkleid's Portfolio" />
        <meta property="og:description" content="Aby Iberkleid's Portfolio" />
        <meta property="og:image" content="../public/facvicon.png" />
        <meta property="og:image:alt" content="Aby Iberkleid Logo" />
        <meta property="og:url" content="abyiber.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="abyiber.com" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@abyiberkleid" />
        <meta name="twitter:title" content="Aby Iberkleid's Portfolio" />
        <meta
          name="twitter:description"
          content="Abraham 'Aby' Iberkleid's Portfolio"
        />
        <meta name="twitter:image" content="../public/favicon.png" />
      </Head>
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
