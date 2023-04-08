import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

interface Item {
  children: React.ReactNode;
}

export default function Layout({ children }: Item) {
  return (
    <main className={`font-Figtree`}>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
