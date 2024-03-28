import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import useClientPaginator from "../../utils/useClientPaginator";

import iconBlue from "../../assets/icon-blue.png";
import TitleAndSubtitle from "../../components/TitleAndSubtitle";
import useTailwindBreakpoints from "../../utils/useTailwindBreakpoints";
import { useEffect } from "react";
import SectionWrapper from "../../components/SectionWrapper";

const experiencesList = [
  "Wealth Management",
  "asset management",
  "finance",
  "commerce",
  "education",
  "accounting",
];

const RealWorldExperience = () => {
  const { is_sm, is_md, is_lg_and_Greater } = useTailwindBreakpoints();

  const {
    pagedData: pagedExperiences,
    handleNext,
    handlePrevious,
    isGreaterThanDataLength,
    isLessThanFirstPage,
    setCurrentPage,
    currentPage,
    totalPages,
  } = useClientPaginator({
    data: experiencesList,
    perPage: is_lg_and_Greater ? 3 : is_md ? 2 : 1,
  });

  useEffect(() => {
    if (currentPage > totalPages || currentPage < 1) setCurrentPage(1);
  }, [is_sm, is_md, currentPage, totalPages, setCurrentPage]);

  const btnClassName =
    "bg-[#1a2041] disabled:bg-slate-500 p-4 text-2xl border border-[#243979] text-[#3c72fc]";

  return (
    <SectionWrapper bgColor="#0F0D1D" extraClassName="text-white">
      <TitleAndSubtitle
        title="REAL-WORLD EXPERIENCE"
        subtitle="The best business consulting firm you can count on!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[2rem] md:mb-[4rem] lg:mb-[10rem]">
        {pagedExperiences.map((exp, idx) => (
          <div key={idx} className="p-16 bg-black relative">
            <p className="w-[60%] h-[80px] text-[24px] leading-[100%] tracking-[-0.03px] uppercase">
              {exp}
            </p>
            <p className="text-[12px] hover:underline hover:transition-all hover:cursor-pointer hover:text-white font-bold text-[#726f84]">
              READ MORE
            </p>
            <div className="absolute bottom-8 right-10">
              <img src={iconBlue} className="max-w-[80px]" alt="icon" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mb-[2rem] md:mb-[4rem] lg:mb-[8rem]">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="w-max">
          <p className="uppercase text-[16px] font-bold text-white whitespace-nowrap">
            meet the partners
          </p>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
      </div>
      <div className="flex justify-between items-center">
        <button
          aria-disabled={isLessThanFirstPage}
          disabled={isLessThanFirstPage}
          className={btnClassName}
          onClick={handlePrevious}
        >
          <FaArrowLeft />
        </button>
        <button
          aria-disabled={isGreaterThanDataLength}
          disabled={isGreaterThanDataLength}
          className={btnClassName}
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </SectionWrapper>
  );
};

export default RealWorldExperience;
