import Projects from "../components/Projects";
import SectionBase from "./base";

const ProjectsSection = () => {
  return (
    <SectionBase id="projects" title={"Projetos"}>
      <div className="flex flex-col gap-10 pt-10 items-center pb-10">
        <h4 className="w-80 text-center text-secondary poppins-light">
          Uma seleção de projetos com foco em desenvolvimento full stack,
          qualidade de código e experiência do usuário.
        </h4>
        <Projects />
      </div>
    </SectionBase>
  );
};

export default ProjectsSection;
