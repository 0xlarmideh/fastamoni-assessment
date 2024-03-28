import brainImg from "../../assets/brainstorming.png";
import checkmarklogo from "../../assets/checkmark.png";

const NoOfProjects = () => {
  const projects = [
    { name: "Satoshi", numValue: "420" },
    { name: "Solution", numValue: "520" },
    { name: "Bitcoin", numValue: "620" },
    { name: "Ethereum", numValue: "720" },
  ];

  const details = ["HIGHEST SUCCESS RATES", "WE BUILD EXPERIENCE"];
  return (
    <section>
      <div className="relative grid grid-cols-4 bg-[#07122d] px-[6rem] pt-[8rem] pb-[12rem]">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-white ${
              idx + 1 !== projects.length && "border-r border-[#707070]"
            }`}
          >
            <span className="bg-[#06050C] p-4">
              <img src={brainImg} alt="brain-icon" />
            </span>
            <p className="text-[40px] font-bold mb-4">{item.numValue}</p>
            <p className="font-semibold uppercase text-[12px]">{item.name}</p>
          </div>
        ))}
        <div className="grid grid-cols-3 absolute bottom-[-100px] px-[6rem] w-full left-0">
          {["Projects", "Management", "Solutions"].map((item, idx) => (
            <div
              className="bg-[#F2F4F8] font-bold text-[20px] hover:text-[#3C72FC] hover:bg-white hover:cursor-pointer uppercase transition-all duration-700 h-[200px] flex justify-center items-center border"
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="px-[6rem] pt-[12rem] pb-[12rem] bg-white grid grid-cols-3">
        <div className="flex flex-col gap-8 border-r border-[#E6E9EF]">
          {details.map((detail, idx) => (
            <div key={idx} className="flex gap-8">
              <span className="bg-[#EBF1FF] p-8">
                <img
                  className="w-[54px]"
                  src={checkmarklogo}
                  alt="checkmark-icon"
                />
              </span>
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
        <div className="px-8">
          <p className="text-[#726F84] leading-[36px] text-[21px]">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form injected humour
            or randomised words which don't look believable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoOfProjects;
