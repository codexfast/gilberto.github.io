import React, { useContext } from "react";

import moon from "../assets/imgs/moon.svg";
import { ThemeContext } from "../context/theme";
import { ScrollContext } from "../context/scroll";

const Navbar = ({ menu }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { isScrolled } = useContext(ScrollContext);

  return (
    <nav
      className={`flex justify-between items-center px-50 fixed top-0 right-0 left-0 ${
        !isScrolled ? "py-15" : "py-5 shadow-sm"
      } transition-all duration-200 ease-in-out bg-surface z-50`}
    >
      <h1 className="text-xl poppins-regular text-theme">Gilberto</h1>
      <ul className="flex space-x-15 poppins-light text-theme">
        {menu.map((m) => (
          <li key={m.name}>
            <a href={m.link}>{m.name}</a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setDarkMode((current) => !current)}
        aria-label={`Ativar tema ${darkMode ? "claro" : "escuro"}`}
      >
        <img src={moon} width={32} height={32} alt="Theme icon" />
      </button>
    </nav>
  );
};

export default Navbar;
