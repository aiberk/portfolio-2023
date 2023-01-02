import Link from "next/link";

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
    justify-between w-auto gap-4"
      >
        <Link
          className="flex flex-row  items-center
    items-align-center
    justify-between"
          href={"https://www.linkedin.com/in/abyiber/"}
        >
          LinkedIn
        </Link>

        <Link
          className="flex flex-row  items-center
    items-align-center
    justify-between"
          href={"https://github.com/aiberk"}
        >
          Github
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
