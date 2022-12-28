import LinkedIn from "./Linkedin";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="font-semibold mt-20 mb-10 flex flex-row w-full items-center
    items-align-center
    justify-between"
    >
      <div>
        <span>abyiber</span> &copy; {new Date().getFullYear()}
      </div>
      <div
        className="flex flex-row  items-center
    items-align-center
    justify-between"
      >
        <Link href={"https://www.linkedin.com"}>
          <LinkedIn />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
