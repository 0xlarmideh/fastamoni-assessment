import { ReactNode } from "react";

const SectionWrapper = ({
  extraClassName,
  bgColor = "bg-white",
  children,
  removeOverflow = true,
}: {
  extraClassName?: string;
  bgColor?: string;
  children: ReactNode;
  removeOverflow?: boolean;
}) => {
  return (
    <section className={`w-[100%] ${bgColor}`}>
      <div
        className={`px-[1.5rem] ${
          removeOverflow && "!overflow-hidden"
        } py-[4rem] md:px-[4rem] md:py-[6rem] lg:px-[6rem] lg:pt-[8rem] lg:pb-[12rem] mx-auto max-w-7xl ${extraClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
