import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const Divider = () => <div className="h-full w-[1px] bg-white"></div>;
const Navbar = () => {
  const pageLinks = [
    "HOME",
    "SERVICES",
    "PAGES",
    "CASE SHOP",
    "BLOG",
    "CONTENT",
  ];
  return (
    <nav className="bg-[#707070] p-0 h-[100px] border-b border-white flex justify-between items-center text-white px-4">
      <div className="flex gap-4 h-full items-center">
        <div>
          <h3 className="text-2xl">LOGO</h3>
        </div>
        <Divider />

        {/* PAGE LINKS */}
        <div className="flex gap-6 items-center text-[20px]">
          {pageLinks.map((link, idx) => (
            <a
              key={idx}
              className="hover:underline transition-all hover:text-slate-300 duration-700"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="flex gap-4 h-full items-center">
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
    </nav>
  );
};

export default Navbar;
