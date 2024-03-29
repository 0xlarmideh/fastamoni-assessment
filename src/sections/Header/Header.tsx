import SectionWrapper from "../../components/SectionWrapper";

const Header = () => {
  return (
    <SectionWrapper bgColor="!bg-[#707070]">
      <div data-aos="zoom-out" className="text-white flex flex-col gap-8">
        <p className="font-medium text-[20px]">WELCOME TO CODEKEEPER</p>
        <p className="font-bold tracking-[-0.03px] text-[48px] md:text-[75px] lg:text-[90px] leading-[100%]">
          CONSULTING
          <br />
          FOR EVERY
          <br />
          BUSINESS
        </p>
        <div>
          <button className="bg-[#3C72FC] px-[2rem] py-[1rem] uppercase">
            Discover More
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Header;
