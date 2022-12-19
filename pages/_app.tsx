import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import MDXComponents from "../components/utils/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MDXProvider>
  );
}
