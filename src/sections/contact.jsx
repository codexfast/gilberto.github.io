import SectionBase from "./base";

import location from "../assets/imgs/Location.png";
import call from "../assets/imgs/Call.svg";
import message from "../assets/imgs/Message.svg";
import map from "../assets/imgs/map.png";

const ContactSection = () => {
  return (
    <SectionBase id="contact" title={"Contact"}>
      <div className="grid grid-cols-2 pt-25 ">
        <div className="flex gap-8 flex-col pl-40 pt-20">
          <a
            href="tel:+5512992138945"
            className="flex gap-3 poppins-light text-theme"
          >
            <img src={call} /> +55 12 99213-8945
          </a>
          <a
            href="mailto:codexfast@gmail.com"
            className="flex gap-3 poppins-light text-theme"
          >
            <img src={message} />
            codexfast@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/place/Santa+Branca,+SP,+12380-000/@-23.403341,-45.8963722,15z/data=!3m1!4b1!4m6!3m5!1s0x94cdb7f24d84e071:0x6f4dbdc1c68d4ada!8m2!3d-23.3981972!4d-45.8868!16zL20vMDh2emM4?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
            className="flex gap-3 poppins-light text-theme"
          >
            <img src={location} />
            Santa Branca, SP - BR
          </a>
        </div>
        <a href="https://www.google.com/maps/place/Santa+Branca,+SP,+12380-000/@-23.403341,-45.8963722,15z/data=!3m1!4b1!4m6!3m5!1s0x94cdb7f24d84e071:0x6f4dbdc1c68d4ada!8m2!3d-23.3981972!4d-45.8868!16zL20vMDh2emM4?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D">
          <img src={map} />
        </a>
      </div>
    </SectionBase>
  );
};

export default ContactSection;
