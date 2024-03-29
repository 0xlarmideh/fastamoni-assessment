import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import useTailwindBreakpoints from "../../../utils/useBreakpoints";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { lg } = useTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Close Drawer if window is resized and greater lg
  useEffect(() => {
    if (lg && isOpen) setIsOpen(false);
  }, [lg, isOpen]);

  const toggleOpenState = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <DesktopNavbar toggleOpenState={toggleOpenState} />
      {!lg && (
        <Transition show={isOpen}>
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <MobileNavbar toggleOpenState={toggleOpenState} />
          </Transition.Child>
        </Transition>
      )}
    </div>
  );
};

export default Navbar;
