import whatsapp_icon from "../assets/imgs/Whatsapp.svg";
import instagram_icon from "../assets/imgs/Instagram.svg";
import github_icon from "../assets/imgs/Github.svg";

const SocialLink = () => {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <a href="https://github.com/codexfast" aria-label="Perfil do GitHub de codexfast">
        <img src={github_icon} alt="Ícone do GitHub" />
      </a>
      <a href="https://instagram.com/gilber.to_" aria-label="Perfil do Instagram de gilber.to_">
        <img src={instagram_icon} alt="Ícone do Instagram" />
      </a>
      <a href="https://wa.me/5512992138945" aria-label="Contato no WhatsApp de Gilberto">
        <img src={whatsapp_icon} alt="Ícone do WhatsApp" />
      </a>
    </div>
  );
};

export default SocialLink;
