import { useEffect, useState } from "react";

import useTailwindBreakpoints from "../../../utils/useTailwindBreakpoints";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { is_lg_and_Greater } = useTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Close Drawer if window is resized and greater lg
  useEffect(() => {
    if (is_lg_and_Greater && isOpen) setIsOpen(false);
  }, [is_lg_and_Greater, isOpen]);

  const toggleOpenState = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <DesktopNavbar toggleOpenState={toggleOpenState} />
      {isOpen && !is_lg_and_Greater && (
        <MobileNavbar toggleOpenState={toggleOpenState} />
      )}
    </div>
  );
};

export default Navbar;
