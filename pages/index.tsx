import Head from "next/head";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import Hero from "../components/ui-components/Hero";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import Card from "../components/ui-components/Card";
import { config } from "../config";
import { Interface } from "readline";
// import { Props } from "../components/Layout";

type Props = {
  mdx: Array<string | number | boolean | []>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: config.spaceId,
    accessToken: config.apiKey,
  });

  const res = await client.getEntries({ content_type: "mdx" });
  return { props: { mdx: res.items } };
  // ...
};

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ mdx }: Props) {
  console.log(mdx);

  return (
    <>
      <Head>
        <title>Abraham Aby Iberkleids Portfolio</title>
        <meta
          name="description"
          content="Abraham 'Aby' Iberkleid's Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        {mdx.map((item: any) => (
          //User reduce to filter out display=false

          <Card key={item.sys.id} item={item}></Card>
        ))}
      </main>
    </>
  );
}
