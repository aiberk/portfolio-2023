import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/ui-components/Hero";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import Card from "../components/ui-components/Card";
// import { Props } from "../components/Layout";

type Props = {
  title: string;
  id: string;
  display: boolean;
  description: string;
  body: string;
  thumbnail: string;
  publishedDate: Date;
  tags: string;
  mdx: any;
  item: any;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: "9ml0r0lfbqrn",
    accessToken: "M1Y1hUxpPygdvCWHH2vymNeeSJb2SYqLiTTgZHgTHmg",
  });

  const res = await client.getEntries({ content_type: "mdx" });
  return { props: { mdx: res.items } };
  // ...
};

const inter = Inter({ subsets: ["latin"] });

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
        {mdx.map((item) => (
          //User reduce to filter out display=false

          <Card key={item.sys.id} item={item}></Card>
        ))}
      </main>
    </>
  );
}
