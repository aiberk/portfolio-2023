import Head from "next/head";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import Hero from "../components/ui-components/Hero";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import Card from "../components/ui-components/Card";
import { config } from "../config";
import { ContentFulItem } from "../types/types";
import EntryFilter from "../components/shared-components/EntryFilter";

type Props = {
  mdx: Array<ContentFulItem>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: config.spaceId,
    accessToken: config.apiKey,
  });

  const res = await client.getEntries({ content_type: "mdx" });
  return { props: { mdx: res.items } };
};

// const inter = Inter({ subsets: ["latin"] });

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
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Aby Iberkleid's Portfolio" />
        <meta property="og:description" content="Aby Iberkleid's Portfolio" />
        <meta property="og:image" content={`../public/facvicon.png`} />
        <meta property="og:image:alt" content="Aby Iberkleid Logo" />
        <meta property="og:url" content="abyiber.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="abyiber.com" />
        <meta
          name="keywords"
          content="Software Development, Front-End, UX Design, Software Engineer, Product Designer, Full Stack Development"
        />

        <meta name="twitter:card" content="Aby Iberkleid's Portfolio" />
        <meta property="twitter:domain" content={`abyiber.com/`} />
        <meta property="twitter:url" content={`abyiber.com/`} />
        <meta name="twitter:title" content={`Aby Iberkleid's Portfolio`} />
        <meta
          name="twitter:description"
          content={`Aby Iberkleid's Portfolio`}
        />
        <meta name="twitter:image" content="../public/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="grid grid-cols-1 place-content-between gap-12">
        <Hero />
        <section className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-8">
          {sorted.map((item) => (
            //User reduce to filter out display=false
            //User reduce to filter out display=false
            <Card key={item.sys.id} item={item}></Card>
          ))}
        </section>
      </main>
    </>
  );
}
