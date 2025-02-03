import { useState, useEffect, useRef, useContext } from "react";
import { ScrollContext } from "../context/scroll";

const SectionsTracker = ({ sections }) => {
  const { posY, isScrolled } = useContext(ScrollContext);

  // const [activeSection, setActiveSection] = useState("home"); // Estado para a seção ativa
  // const homeRef = useRef(null); // Referências para as seções
  // const aboutRef = useRef(null);
  // const servicesRef = useRef(null);
  // const contactRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;

  //     // Lógica para determinar a seção ativa
  //     if (
  //       homeRef.current &&
  //       currentScrollPos >= homeRef.current.offsetTop &&
  //       currentScrollPos < aboutRef.current.offsetTop
  //     ) {
  //       setActiveSection("home");
  //     } else if (
  //       aboutRef.current &&
  //       currentScrollPos >= aboutRef.current.offsetTop &&
  //       currentScrollPos < servicesRef.current.offsetTop
  //     ) {
  //       setActiveSection("about");
  //     } else if (
  //       servicesRef.current &&
  //       currentScrollPos >= servicesRef.current.offsetTop &&
  //       currentScrollPos < contactRef.current.offsetTop
  //     ) {
  //       setActiveSection("services");
  //     } else if (
  //       contactRef.current &&
  //       currentScrollPos >= contactRef.current.offsetTop
  //     ) {
  //       setActiveSection("contact");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div
      className={`fixed right-0 bottom-0 top-0 w-16 flex justify-center items-center transition-opacity duration-300 ease-in-out ${isScrolled ? "opacity-100" : "opacity-0"}`}
    >
      <ul className="gap-2 flex flex-col">
        {sections.map((m) => (
          <li
            key={m.name}
            className="border sections-tracker w-3 h-3 rounded-full"
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsTracker;
