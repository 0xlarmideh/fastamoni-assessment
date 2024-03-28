import { IoMdCheckmark } from "react-icons/io";
import TitleAndSubtitle from "../../components/TitleAndSubtitle";
import RenderedFaq from "./RenderedFaq";

const Faq = () => {
  const rightTexts = [
    "Nsectetur cing elit.",
    "Suspe ndisse suscipit sagittis leo.",
    "Entum estibulum dignissim posuere.",
    "If you are going to use a passage",
    "If you are going to use a passage test data.",
  ];
  return (
    <section className="bg-[#fff] py-20 px-[6rem] text-black">
      <TitleAndSubtitle
        title="QUESTION ANSWERS"
        subtitle="We help our clients renew their business"
      />
      <div className="grid grid-cols-2 gap-6 pt-6 items-end">
        <RenderedFaq />
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            {rightTexts.map((item) => (
              <div className="flex gap-2 items-center text-[18px]">
                <IoMdCheckmark className="text-[#2D95FD]" />
                <p className="text-[#726f84]">{item}</p>
              </div>
            ))}
          </div>
          <div className="font-bold text-white text-center bg-[#3C72FC] py-8 px-12">
            <p className=" text-[70px]">30</p>
            <p className="text-[18px]">
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
