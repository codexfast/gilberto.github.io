import SectionBase from "./base";
import skills_img from "../assets/imgs/skills.png";

const SkillsSection = () => {
  return (
    <SectionBase id="skills" title="Skills">
      <div className="grid grid-cols-2 py-15">
        <img src={skills_img} />
        <div className="flex flex-col">
          <h5 className="text-secondary text-center px-10 poppins-light">
            Well, here's an estimate of my knowledge of the job market in
            general
          </h5>
          <div className="flex flex-col gap-4 py-8 px-5">
            <div className="flex flex-row gap-3">
              <div className="text-end text-secondary poppins-light ml-auto">
                Python
              </div>
              <progress value="90" max="100" className="mt-2.5" />
            </div>

            <div className="flex flex-row gap-3">
              <div className="text-end text-secondary poppins-light ml-auto">
                HTML5/CSS3
              </div>
              <progress value="75" max="100" className="mt-2.5" />
            </div>

            <div className="flex flex-row gap-3">
              <div className="text-end text-secondary poppins-light ml-auto">
                JavaScript
              </div>
              <progress value="65" max="100" className="mt-2.5" />
            </div>

            <div className="flex flex-row gap-3">
              <div className="text-end text-secondary poppins-light ml-auto">
                PHP
              </div>
              <progress value="45" max="100" className="mt-2.5" />
            </div>

            <div className="flex flex-row gap-3">
              <div className="text-end text-secondary poppins-light ml-auto">
                SQL
              </div>
              <progress value="75" max="100" className="mt-2.5" />
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  );
};

export default SkillsSection;
