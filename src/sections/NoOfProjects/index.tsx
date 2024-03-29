import brainImg from "../../assets/brainstorming.png";
import checkmarklogo from "../../assets/checkmark.png";

import SectionWrapper from "../../components/SectionWrapper";

const NoOfProjects = () => {
  const projects = [
    { name: "Satoshi", numValue: "420" },
    { name: "Solution", numValue: "520" },
    { name: "Bitcoin", numValue: "620" },
    { name: "Ethereum", numValue: "720" },
  ];

  const details = ["HIGHEST SUCCESS RATES", "WE BUILD EXPERIENCE"];
  return (
    <>
      <SectionWrapper bgColor="!bg-[#07122d]" extraClassName="pb-[12rem]">
        <div className="relative gap-y-0 md:gap-y-4 grid grid-cols-2 md:grid-cols-4 ">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-white ${
                idx < 2 &&
                "border-b md:border-b-transparent border-[#707070] py-8 md:py-0"
              }
            ${(idx + 1)! % 2 && "border-r border-[#707070]"}
            ${idx > 1 && "py-8 md:py-0"}
             ${
               idx + 1 !== projects.length && "md:border-r md:border-[#707070]"
             }`}
            >
              <span className="bg-[#06050C] p-4">
                <img
                  src={brainImg}
                  className="w-[36px] md:w-[48px]"
                  alt="brain-icon"
                />
              </span>
              <p className="text-[40px] md:text-[33px] lg:text-[40px] font-bold mb-4">
                {item.numValue}
              </p>
              <p className="font-semibold uppercase text-[12px]">{item.name}</p>
            </div>
          ))}
          <div className="grid md:grid-cols-3 absolute bottom-[-20rem] md:bottom-[-10rem] lg:bottom-[-18rem] px-[2rem] w-full left-0">
            {["Projects", "Management", "Solutions"].map((item, idx) => (
              <div
                className="bg-[#F2F4F8] font-bold text-[20px] hover:text-[#3C72FC] hover:bg-white hover:shadow-lg hover:cursor-pointer uppercase transition-all duration-700 h-[80px] md:h-[120px] lg:h-[200px] flex justify-center items-center border shadow-sm"
                key={idx}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper extraClassName="pt-[12rem] pb-[4rem] bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-start gap-8 border-r-transparent lg:border-r  lg:border-[#E6E9EF]">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-8">
              <div className="bg-[#EBF1FF] p-6">
                <img
                  className="w-[33px] md:w-[60px]"
                  src={checkmarklogo}
                  alt="checkmark-icon"
                />
              </div>
              <div className="">
                <p className="font-bold text-[20px] mb-2">{detail}</p>
                <p className="text-[#726F84] w-[80%] leading-[28px] text-[16px]">
                  Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin,
                  lorem is simply free text quis bibendum.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-[#726F84] leading-[36px] text-[21px]">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form injected humour
            or randomised words which don't look believable.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default NoOfProjects;
