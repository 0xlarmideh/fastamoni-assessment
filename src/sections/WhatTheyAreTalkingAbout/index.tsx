import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import useClientPaginator from "../../utils/useClientPaginator";
import useTailwindBreakpoints from "../../utils/useBreakpoints";

import { testimonialsList } from "./data";

import SectionWrapper from "../../components/SectionWrapper";

const WhatTheyAreTalkingAbout = () => {
  const { lg } = useTailwindBreakpoints();

  const {
    pagedData: pagedTestimonials,
    handleNext,
    handlePrevious,
    isGreaterThanDataLength,
    isLessThanFirstPage,
    returnToFirstPage,
  } = useClientPaginator({
    data: testimonialsList,
    perPage: lg ? 2 : 1,
  });

  useEffect(() => {
    returnToFirstPage();
  }, [lg, returnToFirstPage]);

  const btnClassName = "bg-[#fff] disabled:bg-slate-200 disabled:text-gray-400 button rounded-full p-4 text-[#000]";
  return (
    <SectionWrapper
      bgColor="!bg-[#F2F4F8]"
      extraClassName="flex flex-col md:flex-row gap-6 text-black"
    >
      <div className="w-full md:w-[40%]">
        <p className="text-black text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[100%] mb-4">
          WHAT THEY ARE TALKING ABOUT?
        </p>
        <p className="text-[#726F84] text-[18px] mb-6">
          Trusted by more than 4,200 customers
        </p>
        <div className="flex gap-2">
          <button
            aria-disabled={isLessThanFirstPage}
            disabled={isLessThanFirstPage}
            className={`${btnClassName} ${!isLessThanFirstPage && "button"}`}
            onClick={handlePrevious}
          >
            <FaArrowLeft />
          </button>
          <button
            aria-disabled={isGreaterThanDataLength}
            disabled={isGreaterThanDataLength}
            className={`${btnClassName} ${!isGreaterThanDataLength && "button"}`}
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full md:w-[60%] grid lg:grid-cols-2 gap-4">
        {pagedTestimonials.map((item, idx) => (
          <div key={idx} className="bg-white p-6 text-[#726F84]">
            <p className="text-[14px] mb-6 text-[18px] leading-[34px]">
              {item.testimonial}
            </p>
            <p className="text-[#3C72FC] text-[16px] mb-2 font-semibold tracking-[-0.03px] uppercase">
              {item.author}
            </p>
            <p className=" text-[12px] tracking-[-0.03px] uppercase">
              {item.userType}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatTheyAreTalkingAbout;
