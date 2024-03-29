import { ReactNode } from "react";

const SectionWrapper = ({
  extraClassName,
  bgColor = "#fff",
  children,
}: {
  extraClassName?: string;
  bgColor?: string;
  children: ReactNode;
}) => {
  return (
    <section className={`w-full !bg-[${bgColor}]`}>
      <div
        className={`px-[1.5rem] py-[4rem] md:px-[4rem] md:py-[6rem] lg:px-[6rem] lg:pt-[8rem] lg:pb-[12rem] mx-auto max-w-7xl ${extraClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
