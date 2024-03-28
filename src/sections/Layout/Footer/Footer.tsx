import phone from "../../../assets/phone.png";
import map from "../../../assets/map.png";
import email from "../../../assets/email.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import SectionWrapper from "../../../components/SectionWrapper";

const Footer = () => {
  const details1 = [
    "About",
    "Meet our Team",
    "Case Studies",
    "Latest News",
    "Contact",
  ];

  const contactInfo = [
    { icon: phone, text: "+123 456 7890" },
    { icon: email, text: "needhelp@company.com" },
    { icon: map, text: "66 Broklyn Street New York, USA" },
  ];
  const details2 = ["Support", "Terms of Use", "Privacy & Policy", "Help"];
  return (
    <SectionWrapper bgColor="#000" extraClassName=" text-[#8F8DA0]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 border-b border-[#393737] pb-[4rem] ">
        {/* CreativeLogo section */}
        <div>
          <div className="font-bold text-[18px] text-white mb-4 pb-[1rem]">
            CreativeLogo
          </div>
          <div className="text-[16px] leading-[34px] mb-4 border-b border-[#393737] pb-4">
            Welcome to our consultancy agency. Lore ipsum simply text amet cing
            elit simply text amet cing elit.
          </div>
          <div className="grid gap-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={info.icon} alt={info.text} />
                <p>{info.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <p className="font-bold text-[18px] text-white mb-4 pb-[1rem]">
            EXPLORE
          </p>
          <div className="flex gap-[4rem]">
            <div className="flex flex-col gap-4">
              {details1.map((detail, idx) => (
                <div key={idx} className="flex gap-8">
                  <p className="font-bold  mb-2">{detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {details2.map((detail, idx) => (
                <div key={idx} className="flex gap-8">
                  <p className="font-bold  mb-2">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div>
          <p className="font-bold text-[18px] text-white mb-4 pb-[1rem]">
            NEWSLETTER
          </p>
          <p className="font-bold">
            Subscribe for our latest articles and resources.
          </p>
          <div className=" bg-[#fff] p-2 mt-4 flex justify-between items-center rounded-sm gap-1">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full border-none outline-none bg-[#fff] text-[#000] rounded-sm pl-4"
            />
            <button className="bg-[#3C72FC] text-white px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Foot Note section */}
      <div className="flex justify-between items-center mt-8">
        <p className="font-[600]">© Copyright 2021 by Company</p>

        <div className="flex gap-4 text-2xl items-center text-white">
          <FaInstagram className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
