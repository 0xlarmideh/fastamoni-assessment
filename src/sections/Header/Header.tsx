const Header = () => {
  return (
    <div className="bg-[#707070] px-[6rem] pt-[8rem] pb-[12rem]">
      <div className="text-white flex flex-col gap-8">
        <p className="font-medium text-[20px]">WELCOME TO CODEKEEPER</p>
        <p className="font-bold tracking-[-0.03px] text-[90px] leading-[100%]">
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
    </div>
  );
};

export default Header;
