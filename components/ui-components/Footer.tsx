import LinkedIn from "./Linkedin";
import Link from "next/link";
import GithubIcon from "./GithubIcon";
const Footer = () => {
  return (
    <footer
      className="font-semibold mt-20 mb-10 flex flex-row w-full items-center
    items-align-center
    justify-between md:max-w-5xl sm:max-w-lg"
    >
      <div>
        <span>abyiber</span> &copy; {new Date().getFullYear()}
      </div>
      <div
        className="flex flex-row  items-center
    items-align-center
    justify-between w-auto gap-2"
      >
        <Link href={"https://www.linkedin.com"}>
          <LinkedIn />
        </Link>

        <Link href={"https://www.github.com"}>
          <GithubIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
