import iconMotor from "../../assets/icon-motor.png";

import SectionWrapper from "../../components/SectionWrapper";
import TitleAndSubtitle from "../../components/TitleAndSubtitle";

const caseStudiesList = [
  { title: "business growth", subtitle: "thought leadership 1" },
  { title: "business revenue", subtitle: "thought leadership 2" },
  { title: "business loss", subtitle: "thought leadership 3" },
];

const NewCaseStudies = () => {
  return (
    <SectionWrapper
      bgColor="!bg-[#F2F4F8]"
      extraClassName="lg:pt-[12rem] lg:pb-[8rem]"
    >
      <TitleAndSubtitle
        title="new case studies"
        subtitle="We help our clients renew their business!"
        subtitleColor="#726F84"
      />
      <div className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-8 mt-[3rem]">
        {caseStudiesList.map((item, idx) => (
          <div
            key={idx}
            className="group hover:cursor-pointer md:h-[360px]  lg:h-[540px]  text-white bg-[#93939c] flex flex-col justify-end"
          >
            <div className="group-hover:bg-[#3C72FC] mt-[3rem] md:mt-0 mr-[6rem] md:mr-[1rem] p-8 lg:p-12 group-hover:pb-10 md:group-hover:pb-16 lg:group-hover:pb-20 transition-all duration-700">
              <img src={iconMotor} className="h-[54px]" alt="motor-icon" />
              <p className="text-[14px] mb-2 uppercase mt-6">{item.subtitle}</p>
              <p className="w-full md:w-[60%] md:h-[80px] font-bold text-[24px] leading-[100%] uppercase tracking-[-0.03px] uppercase">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default NewCaseStudies;
