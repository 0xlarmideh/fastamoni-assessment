import { useState, useEffect } from "react";

const useTailwindBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState({
    is_sm: false,
    is_md: false,
    is_md_and_Greater: false,

    is_lg: false,
    is_lg_and_Greater: false,
    is_xl: false,
    is_2xl: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setBreakpoints({
        is_sm: innerWidth >= 640 && innerWidth < 768,
        is_md: innerWidth >= 768 && innerWidth < 1024,
        is_md_and_Greater: innerWidth > 768,
        is_lg: innerWidth >= 1024 && innerWidth < 1280,
        is_lg_and_Greater: innerWidth > 1024,
        is_xl: innerWidth >= 1280 && innerWidth < 1536,
        is_2xl: innerWidth >= 1536,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoints;
};

export default useTailwindBreakpoints;
