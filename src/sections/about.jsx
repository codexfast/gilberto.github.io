import SectionBase from "./base";

import about_image from "../assets/imgs/about-image.png";
import SocialLink from "../components/SocialLink";

const AboutSection = () => {
  return (
    <SectionBase title="About" id="about">
      <div className="grid grid-cols-2 py-15">
        <img src={about_image} />

        <div className="flex justify-center gap-5 flex-col">
          <h2 className="text-4xl poppins-medium text-theme">
            A little about myself
          </h2>
          <h3 className="text-lg poppins-semibold text-secondary">
            Gilberto Leandro (Fullstack developer)
          </h3>
          <h4 className="text-sm poppins-light text-secondary">
            A not very handsome guy, I'm Brazilian and I live in Santa Branca -
            SP. I study a lot and I love programming, I take on challenges and
            don't let go until I solve them.
          </h4>

          <h4 className="text-sm poppins-light text-secondary">
            I'm 25 years old and I want to be part of a great team and be part
            of big projects.
          </h4>
          <div className="py-5">
            <SocialLink />
          </div>
          {/* <a
            href="#contact"
            className="btn-primary w-40 py-4 poppins-light text-center"
          >
            Contact me
          </a> */}
        </div>
      </div>
    </SectionBase>
  );
};

export default AboutSection;
