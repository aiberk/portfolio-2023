import Link from "next/link";

import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";

export type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
