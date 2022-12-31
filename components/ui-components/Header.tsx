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
        <div
          className="flex
          flex-row
          items-center
          items-align-center
          justify-between
          w-full
          py-4
          px-0
          text-lg
          "
        >
          <Logo />

          <nav
            className={`flex flex-col  items-center justify-between w-auto z-50`}
            id="menu"
          >
            <ul
              className={`flex text-base
              
              md:flex
              md:justify-between
              md:pt-0
              md:flex-row
              md:relative
              flex-row
             `}
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
              <li id="themeChanger" className="p-3 hidden md:inline-flex">
                {" "}
                {renderThemeChanger()}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
