import Link from "next/link";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Moon from "./Moon";
import Sun from "./Sun";

const navigations = [
  { label: "Work", path: "/work/", color: "text-red-500" },
  { label: "About", path: "/about", color: "text-red-500" },
  { label: "Lets Talk", path: "/talk", color: "text-red-500" },
];

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  //For Dark Mode Swithcer
  const [mounted, setMounted] = useState(false);
  //For Responsive Nav
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setToggleState(true);
  }, []);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
    console.log(toggleState);
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button className="" onClick={() => setTheme("light")}>
          <Moon />
        </Button>
      );
    } else {
      return (
        <Button className="" onClick={() => setTheme("dark")}>
          <Sun />
        </Button>
      );
    }
  };

  return (
    <>
      <header className="h-20">
        <nav
          className="flex
          flex-wrap
          items-center
          items-align-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg
          border-1px-blue
          "
        >
          <Logo />
          <Button className="md:hidden block z-auto" onClick={() => toggle()}>
            <Hamburger />
          </Button>
          <nav
            className={`${
              toggleState ? "hidden" : "flex flex-col"
            } w-full md:flex md:items-center md:justify-between md:w-auto z-50`}
            id="menu"
          >
            <ul
              className={`flex text-base
              pt-4
              md:flex
              md:justify-between
              md:pt-0
              md:flex-row
              border-dashed
              md:bg-transparent
              md:relative
              ${
                toggleState
                  ? "flex-row"
                  : "flex-col light: bg-white dark:bg-gray-800 h-screen w-screen fixed top-15 left-0 right-0 p-10"
              }`}
            >
              {navigations.map((nav) => (
                <Link
                  // className="font-semibold hover:text-yellow-400"
                  className={`font-semibold md:p-4 py-2 block hover:text-purple-500`}
                  href={nav.path}
                  key={nav.path + nav.label}
                >
                  {nav.label}
                </Link>
              ))}
              {renderThemeChanger()}
            </ul>
          </nav>
        </nav>
      </header>
    </>
  );
};

export default Header;
