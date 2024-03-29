import { ProgressBarContainer as ProgressBar } from "progress_bar_for_react";

import video from "../../assets/video.mp4";
import phone2 from "../../assets/phone2.png";
import aivonText from "../../assets/AIVONS.png";
import right from "../../assets/right.png";
import left from "../../assets/left.png";

import SectionWrapper from "../../components/SectionWrapper";

const LeadingMarket = () => {
  const processList = [
    {
      title: "get professional advice",
      description:
        "There are many variations of available but the majority have suffered alteration.",
    },
    {
      title: "trusted & professional",
      description:
        "There are many variations of available the majority have suffered alteration.",
    },
  ];

  const servicesProgress = [
    { title: "Consulting", value: 88 },
    { title: "Advices", value: 68 },
  ];
  return (
    <SectionWrapper extraClassName="relative">
      <div>
        <div className="absolute bottom-[0rem] left-[0rem]">
          <img src={left} alt="phone" className="h-[170px]" />
        </div>

        <div className="absolute top-0  right-[0rem] ">
          <img src={right} alt="phone" className="w-[80px] h-[150px]" />
        </div>

        <div className="absolute top-[50%] md:top-[6rem] lg:top-[8rem] right-0 md:right-[1rem] lg:right-[1rem] ">
          <img src={aivonText} alt="phone" className="h-[450px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[4rem]">
          <div>
            <video controls className="w-full bg-[#3C72FC] p-6 mt-2 rounded-md">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative">
            <p className="uppercase font-bold text-[36px] leading-[45px] md:text-[42px] md:leading-[48px] lg:text-[50px] leading-[60px]">
              We&apos;re leading in the market
            </p>
            <p className="text-[#726F84] leading-[24px] py-6">
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              doloremagna aliqua lonm andhn.
            </p>
            <p className="text-[#3C72FC] text-[18px] font-[500]">
              We have 35+ years of experience. We offer marketing and consulting
              services
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {servicesProgress.map((service, idx) => (
                <div key={idx}>
                  <ProgressBar
                    percentage={service.value}
                    fillerExtraStyles={{
                      backgroundColor: "#3C72FC",
                    }}
                    progressBarExtraStyles={{
                      position: "relative",
                      height: "10px",
                      width: "100%",
                      borderRadius: "5px",
                      border: "1px solid #3C72FC",
                    }}
                  />
                  <div className="flex justify-between mt-2">
                    <p className="text-[14px] font-bold uppercase">
                      {service.title}
                    </p>
                    <p className="text-[14px] font-[500]">{service.value}%</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <img src={phone2} alt="phone" className="bg-[#EBF1FF] p-2" />
              <div>
                <p className="text-[14px] text-[#726F84]">
                  Have any question? Give us a call
                </p>
                <p className="text-[14px] font-[500]">+92 666 888 0000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2 mb-[-4.5rem]">
          {processList.map((process, idx) => (
            <div key={idx} className="bg-white shadow-lg p-6 rounded-md w-full">
              <div className="flex items-start gap-4 mt-4">
                <p className="bg-[#EBF1FF] text-[#3C72FC] px-4 py-2 font-bold">
                  0{idx + 1}
                </p>
                <div>
                  <p className="text-[20px] font-[700] uppercase">
                    {process.title}
                  </p>
                  <p className="pt-4 pb-4 leading-[28px]">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LeadingMarket;
