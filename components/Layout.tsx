import Link from "next/link";

export type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <header>
        <Link href="/">
          <h1>
            <span>Fat Boy</span>
            <span>Recipes</span>
          </h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div>{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :</p>
      </footer>
    </div>
  );
}
