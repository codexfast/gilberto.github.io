import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    window.localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const values = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
