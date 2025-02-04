import "./index.css";
import Navbar from "./components/Navbar";
import SectionsTracker from "./components/SectionsTracker";
import { ThemeProvider } from "./context/theme";
import HeroSection from "./sections/hero";
import { ScrollProvider } from "./context/scroll";
import AboutSection from "./sections/about";
import QuotationSection from "./sections/quotation";
import SkillsSection from "./sections/skills";
import ProjectsSection from "./sections/projects";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <ScrollProvider>{children}</ScrollProvider>
    </ThemeProvider>
  );
};

export default function App() {
  const menu = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <AppProvider>
      <SectionsTracker sections={menu} />
      <header className="pt-40">
        {/* Navbar */}
        <Navbar menu={menu} />
        <HeroSection />
      </header>
      <AboutSection />
      <QuotationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </AppProvider>
  );
}
