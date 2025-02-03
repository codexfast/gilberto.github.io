import { createContext, useState, useEffect } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [posY, setPosY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      setPosY(window.scrollY);
    } else {
      setIsScrolled(false);
      setPosY(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const values = {
    isScrolled,
    posY,
  };

  return (
    <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>
  );
};
