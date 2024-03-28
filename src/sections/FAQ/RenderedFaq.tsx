import { Disclosure } from "@headlessui/react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

import { FaqList } from "./data";

import TransitionWrapper from "../../components/TransitionWrapper";

const RenderedFaq = () => {
  return (
    <div className="flex flex-col gap-4">
      {FaqList.map((faq, idx) => (
        <Disclosure as="div" className=" " key={idx}>
          {({ open }) => (
            <div
              className={` ${
                open ? "border border-[#E6E9EF]" : ""
              } bg-white rounded-lg`}
            >
              <Disclosure.Button
                className={`flex w-full justify-between items-center ${
                  open ? "bg-transparent" : "bg-[#F2F4F8]"
                } px-6 py-8 text-left font-bold`}
              >
                <div className="flex gap-2">
                  <p className="text-[#3C72FC] w-[40px]">{idx + 1}.</p>
                  <span className="text-[#0F0D1D] text-[16px]">
                    {faq.question}
                  </span>
                </div>
                {open ? (
                  <FiMinus className="text-[#707070]" />
                ) : (
                  <FaPlus className="text-[#3C72FC]" />
                )}
              </Disclosure.Button>
              <TransitionWrapper>
                <Disclosure.Panel className="px-6 pb-6 text-sm text-gray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </TransitionWrapper>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default RenderedFaq;
