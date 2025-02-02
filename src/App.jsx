import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import SectionsTracker from "./components/SectionsTracker";
import { ThemeProvider } from "./context/theme";
import HeroSection from "./sections/hero";
import SectionBase from "./sections/base";

export default function App() {
  const menu = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <ThemeProvider>
      <SectionsTracker sections={menu} />
      <header className="pt-40">
        {/* Navbar */}
        <Navbar menu={menu} />
        <HeroSection />
        <SectionBase title={"About"}>aaa</SectionBase>
      </header>
    </ThemeProvider>
  );
}
