import SocialLink from "../components/SocialLink";
import SectionBase from "./base";

const Footer = () => {
  return (
    <SectionBase id="footer">
      <div className="py-10 flex flex-col gap-5">
        <h5 className="text-primary poppins-light text-md mx-auto">
          © 2024 Copyright. Gilberto Leandro.
        </h5>
        <SocialLink />
      </div>
    </SectionBase>
  );
};

export default Footer;
