import SectionBase from "./base";

import about_image from "../assets/imgs/about-image.png";
import SocialLink from "../components/SocialLink";

const AboutSection = () => {
  return (
    <SectionBase title="Sobre" id="about">
      <div className="grid grid-cols-2 py-15">
        <img src={about_image} />

        <div className="flex justify-center gap-5 flex-col">
          <h2 className="text-4xl poppins-medium text-theme">Sobre mim</h2>
          <h3 className="text-lg poppins-semibold text-secondary">
            Gilberto Leandro · Desenvolvedor Full Stack
          </h3>
          <h4 className="text-sm poppins-light text-secondary">
            Sou desenvolvedor brasileiro, baseado em Santa Branca (SP), com
            experiência na construção de aplicações web e desktop.
          </h4>

          <h4 className="text-sm poppins-light text-secondary">
            Tenho perfil analítico, aprendizado contínuo e atuação orientada a
            solução de problemas complexos, sempre com foco em entregar valor ao
            produto e ao usuário.
          </h4>
          <div className="py-5">
            <SocialLink />
          </div>
        </div>
      </div>
    </SectionBase>
  );
};

export default AboutSection;
