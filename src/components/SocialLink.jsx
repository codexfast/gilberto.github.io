import whatsapp_icon from "../assets/imgs/Whatsapp.svg";
import instagram_icon from "../assets/imgs/Instagram.svg";
import github_icon from "../assets/imgs/Github.svg";

const SocialLink = () => {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <a href="#">
        <img src={github_icon} />
      </a>
      <a href="#">
        <img src={instagram_icon} />
      </a>
      <a href="#">
        <img src={whatsapp_icon} />
      </a>
    </div>
  );
};

export default SocialLink;
