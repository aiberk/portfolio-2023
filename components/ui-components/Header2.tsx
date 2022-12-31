import Link from "next/link";
import Button from "./Button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Emoji from "./Emoji";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Close from "./Close";
import NavItem from "./NavItem";

const navigations = [
  {
    label: "Work",
    emoji: "💻",
    path: "/",
    color: "text-purple-500",
  },
  // {
  //   label: "Resume",
  //   emoji: "📃",
  //   path: "/",
  //   color: "text-purple-500",
  // },
  {
    label: "About",
    emoji: "🧑",
    path: "/about",
    color: "text-purple-500",
  },
  // {
  //   label: "Blog",
  //   emoji: "📰",
  //   path: "/about",
  //   color: "text-purple-500",
  // },
  // {
  //   label: "Shop",
  //   emoji: "🛒",
  //   path: "/about",
  //   color: "text-purple-500",
  // },

  {
    label: "Lets Talk",
    emoji: "☎️",
    path: "/talk",
    color: "text-purple-500",
  },
  // {
  //   label: "Settings",
  //   emoji: "⚙️",
  //   path: "/talk",
  //   color: "text-purple-500",
  // },
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
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button className="hover:scale-125" onClick={() => setTheme("light")}>
          <Emoji symbol="🌛" label="moon" />
        </Button>
      );
    } else {
      return (
        <Button className="hover:scale-125" onClick={() => setTheme("dark")}>
          <Emoji symbol="🌞" label="moon" />
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
          px-0
          text-lg
          "
        >
          <Logo />

          <Button className="md:hidden block z-auto" onClick={() => toggle()}>
            {toggleState ? <Hamburger /> : <Close />}
          </Button>

          <nav
            className={`${
              toggleState ? "hidden" : "flex flex-col"
            } w-full md:flex md:items-center md:justify-between md:w-auto z-50`}
            id="menu"
          >
            <ul
              className={` ${toggleState ? "hidden " : ""}flex text-base
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
                  : "flex-col light: bg-white dark:bg-black h-screen w-screen fixed top-15 left-0 right-0 p-6"
              }`}
            >
              {navigations.map((nav) => (
                <NavItem
                  key={nav.label + nav.color + nav.emoji + nav.path}
                  label={nav.label}
                  emoji={nav.emoji}
                  path={nav.path}
                  color={nav.color}
                ></NavItem>
              ))}
              <li id="themeChanger" className="p-3">
                {" "}
                {renderThemeChanger()}
              </li>
            </ul>
          </nav>
        </nav>
      </header>
    </>
  );
};

export default Header;
