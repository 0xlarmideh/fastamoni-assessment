import iconMotor from "../../assets/icon-motor.png";
import TitleAndSubtitle from "../../components/TitleAndSubtitle";

const caseStudiesList = [
  { title: "business growth", subtitle: "thought leadership 1" },
  { title: "business revenue", subtitle: "thought leadership 2" },
  { title: "business loss", subtitle: "thought leadership 3" },
];

const NewCaseStudies = () => {
  return (
    <section className="px-[6rem] bg-[#F2F4F8] pt-[12rem] pb-[8rem]">
      <TitleAndSubtitle
        title="new case studies"
        subtitle="We help our clients renew their business!"
        subtitleColor="#726F84"
      />
      <div className="grid grid-cols-3 gap-8">
        {caseStudiesList.map((item, idx) => (
          <div
            key={idx}
            className="group hover:cursor-pointer h-[540px] mt-[3rem] text-white bg-[#93939c] flex flex-col justify-end"
          >
            <div className="group-hover:bg-[#3C72FC] mr-[3rem] p-12 group-hover:pb-20 transition-all duration-700">
              <img src={iconMotor} className="h-[54px]" alt="motor-icon" />
              <p className="text-[14px] mb-2 uppercase mt-6">{item.subtitle}</p>
              <p className="w-[60%] h-[80px] font-bold text-[24px] leading-[100%] uppercase tracking-[-0.03px] uppercase">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCaseStudies;
