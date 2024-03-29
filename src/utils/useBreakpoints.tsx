import { useState, useEffect } from 'react';

const useTailwindBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState<{[x: string]: boolean}>({
    md: false,
    lg: false,
  });

  useEffect(() => {
    const checkBreakpoints = () => {
      const mdMatch = window.matchMedia('(min-width: 768px)');
      const lgMatch = window.matchMedia('(min-width: 1024px)');

      setBreakpoints({
        md: mdMatch.matches,
        lg: lgMatch.matches,
      });
    };

    checkBreakpoints(); 

    window.addEventListener('resize', checkBreakpoints);

    return () => window.removeEventListener('resize', checkBreakpoints);
  }, []);

  return breakpoints;
};

export default useTailwindBreakpoints;