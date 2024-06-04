import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 640;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update window size
    function handleResize() {
      const { innerWidth } = window;
      setWindowSize({
        width: innerWidth,
        height: window.innerHeight,
      });

      // Check if window width is less than the mobile breakpoint
      setIsMobile(innerWidth < MOBILE_BREAKPOINT);
    }

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    // Remove event listener on component cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect runs only on mount and unmount

  return { ...windowSize, isMobile };
}

export default useWindowSize;
