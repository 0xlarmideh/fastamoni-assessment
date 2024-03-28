import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useClientPaginator from "../../utils/useClientPaginator";
import { testimonialsList } from "./data";

const WhatTheyAreTalkingAbout = () => {
  const {
    pagedData: pagedTestimonials,
    handleNext,
    handlePrevious,
    isGreaterThanDataLength,
    isLessThanFirstPage,
  } = useClientPaginator({
    data: testimonialsList,
    perPage: 2,
  });
  const btnClassName = "bg-[#fff] rounded-full p-4 text-[#000]";
  return (
    <section className="bg-[#F2F4F8] flex gap-6 text-black px-[6rem] py-[8rem] text-white">
      <div className="w-[30%]">
        <p className="text-[65px] font-bold leading-[100%] mb-4">
          WHAT THEY ARE TALKING ABOUT?
        </p>
        <p className="text-[#726F84] text-[18px] mb-6">
          Trusted by more than 4,200 customers
        </p>
        <div className="flex gap-2">
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
      </div>
      <div className="w-[70%] grid grid-cols-2 gap-8">
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
    </section>
  );
};

export default WhatTheyAreTalkingAbout;
