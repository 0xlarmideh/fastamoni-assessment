import { FaFacebook, FaHamburger, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import { pageLinks } from "./data";

const Divider = () => <div className="h-full w-[1px] bg-white"></div>;

const DesktopNavbar = ({
  toggleOpenState,
}: {
  toggleOpenState: () => void;
}) => {
  return (
    <nav className="bg-[#707070] p-0 h-[100px] border-b border-white flex justify-between items-center text-white px-4">
      <div className="flex gap-4 h-full items-center">
        <div>
          <h3 className="text-2xl">LOGO</h3>
        </div>
        <Divider />

        {/* PAGE LINKS */}
        <div className="hidden lg:grid grid-cols-4 gap-2 items-center text-[20px]">
          {pageLinks.map((link, idx) => (
            <a
              key={idx}
              className="w-[100px] whitespace-nowrap hover:underline transition-all hover:text-slate-300 duration-700"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex gap-4 h-full items-center">
        <div className="flex gap-4 text-2xl items-center">
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
          <FaFacebook />
        </div>
        <Divider />
        <div className="text-2xl">
          <FiSearch />
        </div>
        <Divider />
        <div className="text-[20px]">
          <p>Need help?</p>
          <p>+92 000 67 678</p>
        </div>
      </div>
      <button
        className={
          "lg:hidden bg-slate-700 p-4 text-2xl border border-[#243979] text-[#fff]"
        }
        onClick={toggleOpenState}
      >
        <FaHamburger />
      </button>
    </nav>
  );
};

export default DesktopNavbar;
