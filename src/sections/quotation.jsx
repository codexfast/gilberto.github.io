import SectionBase from "./base";
import quotation_img from "../assets/imgs/quote.svg";

const QuotationSection = () => {
  return (
    <SectionBase id="quotation">
      <div className="w-lg flex flex-col mx-auto gap-5">
        <img src={quotation_img} width={65} className="mx-auto" />
        <h4 className="text-secondary poppins-regular">
          I think ninety-nine times and find nothing; I stop thinking, I dive
          into deep silence – and behold, the truth reveals itself to me.
        </h4>
        <h4 className="text-secondary poppins-extralight text-center">
          - Albert Einstein
        </h4>
      </div>
    </SectionBase>
  );
};

export default QuotationSection;
