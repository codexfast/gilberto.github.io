import hero_perfil from "../assets/imgs/hero-perfil.png";
import chevron_down from "../assets/imgs/chevron-down.svg";

import SocialLink from "../components/SocialLink";

const HeroSection = () => {
  return (
    <section>
      <div className="flex px-48 py-20">
        <div className="flex-1 gap-5 flex flex-col px-14">
          <h2 className="text-4xl poppins-medium text-theme">
            Olá, eu sou Gilberto Leandro
          </h2>
          <h3 className="text-lg poppins-semibold text-secondary">
            Desenvolvedor Full Stack
          </h3>
          <h4 className="text-sm poppins-light text-secondary">
            Desenvolvo soluções web e desktop com foco em performance,
            usabilidade e resultados de negócio.
          </h4>
          <a
            href="#contact"
            className="btn-primary w-40 py-4 poppins-light text-center"
          >
            Fale comigo
          </a>
        </div>
        <div className="flex-1 px-14">
          <img className="ml-auto" src={hero_perfil} width={250} height={250} />
        </div>
      </div>
      <div className="flex flex-col gap-5 py-10">
        <SocialLink />
        <button className="mx-auto botao-descendo p-3">
          <img src={chevron_down} width={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
