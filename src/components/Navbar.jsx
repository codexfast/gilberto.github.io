import React, { useState, useEffect, useContext } from "react";

import moon from "../assets/imgs/moon.svg";
import { ThemeContext } from "../context/theme";

const Navbar = ({ menu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-50 fixed top-0 right-0 left-0 ${
        !isScrolled ? "py-15" : "py-5 shadow-sm"
      } transition-all duration-200 ease-in-out bg-white`}
    >
      <h1 className="text-xl poppins-regular text-theme">Gilberto</h1>
      <ul className="flex space-x-15 poppins-light text-theme">
        {menu.map((m) => (
          <li key={m.name}>
            <a href={m.link}>{m.name}</a>
          </li>
        ))}
      </ul>
      <button type="button">
        <img src={moon} width={32} height={32} />
      </button>
    </nav>
  );
};

export default Navbar;
