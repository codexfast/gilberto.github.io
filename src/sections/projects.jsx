import Projects from "../components/Projects";
import SectionBase from "./base";

const ProjectsSection = () => {
  return (
    <SectionBase id="projects" title={"Projects"}>
      <div className="flex flex-col gap-10 pt-10 items-center pb-10">
        <h4 className="w-80 text-center text-secondary poppins-light">
          Here are some of my humble projects, they are very simple
        </h4>
        <Projects />
      </div>
    </SectionBase>
  );
};

export default ProjectsSection;
