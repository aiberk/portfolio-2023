import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";

interface Item {
  [key: string]: [value: string | boolean | number | [] | []];
}

export default function Layout({ children }: Item) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
