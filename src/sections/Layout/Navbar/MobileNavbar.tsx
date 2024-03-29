import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaXmark } from "react-icons/fa6";

import { pageLinks } from "./data";

const MobileNavbar = ({ toggleOpenState }: { toggleOpenState: () => void }) => {
  return (
    <nav className="fixed top-0 px-4 left-0 h-dvh z-[150] w-full bg-white">
      <div className="flex border-b py-6 gap-4 justify-between items-center">
        <div>
          <h3 className="text-2xl">LOGO</h3>
        </div>
        <button
          className={
            "bg-slate-700 button p-4 text-2xl border border-[#243979] text-[#fff]"
          }
          onClick={toggleOpenState}
        >
          <FaXmark />
        </button>
      </div>
      <div className="flex flex-col justify-between">
        {/* PAGE LINKS */}
        <div className="flex flex-col gap-4 mt-4 text-[20px]">
          {pageLinks.map((link, idx) => (
            <a
              key={idx}
              className="transition-all border-b pb-2 hover:text-slate-300 duration-700"
              href="#"
              onClick={toggleOpenState}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 w-full px-4 pb-8">
          <div className="flex justify-between">
            <div className="flex gap-4 text-2xl items-center">
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
              <FaFacebook />
            </div>
            <div className="text-[20px]">
              <p>Need help?</p>
              <p>+92 000 67 678</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
