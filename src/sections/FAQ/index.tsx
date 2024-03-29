import { IoMdCheckmark } from "react-icons/io";

import TitleAndSubtitle from "../../components/TitleAndSubtitle";
import RenderedFaq from "./RenderedFaq";
import SectionWrapper from "../../components/SectionWrapper";

const Faq = () => {
  const rightTexts = [
    "Nsectetur cing elit.",
    "Suspe ndisse suscipit sagittis leo.",
    "Entum estibulum dignissim posuere.",
    "If you are going to use a passage",
    "If you are going to use a passage test data.",
  ];
  return (
    <SectionWrapper extraClassName="text-black lg:py-20">
      <TitleAndSubtitle
        title="QUESTION ANSWERS"
        subtitle="We help our clients renew their business"
      />
      <div
        data-aos="zoom-out"
        className="grid lg:grid-cols-2 gap-6 pt-6 items-end"
      >
        <RenderedFaq />
        <div className="flex items-end gap-4 justify-between">
          <div className="flex flex-col gap-4">
            {rightTexts.map((item, idx) => (
              <div key={idx} className="flex gap-2 items-center text-[18px]">
                <IoMdCheckmark className="text-[#2D95FD]" />
                <p className="text-[#726f84]">{item}</p>
              </div>
            ))}
          </div>
          <div className="font-bold  text-white text-center bg-[#3C72FC] px-8 py-6">
            <p className=" text-[70px]">30</p>
            <p className="text-[18px]">
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Faq;
