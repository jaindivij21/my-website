"use client"

// Essential Imports
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

// Component Imports
import InfiniteBanner from "../../shared/ui/building-blocks/infinite-banner";

// Component: TextTicker
// Description: A component that displays a ticker of any element.
export const TextTicker = () => {
  const clock = useMotionValue(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      clock.set(clock.get() + 3);
    }, 1);

    // Cleanup function: Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [clock]);

  return (
    <div
      className="relative -mt-10 2x-sm:-mt-16 sm:-mt-20 md:-mt-24 lg:-mt-[120px]"
    >
      <div className="absolute inset-0 bg-black blur-lg -rotate-6"></div>
      <InfiniteBanner
        clock={clock}
        loopDuration={10000}
        className="transform -rotate-6 overflow-hidden lg:min-h-[50px]"
        style={{
          WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)"
        }}
      >
        <div className="grid grid-cols-1 grid-rows-1 justify-items-center">
          <div className="text-sm 3x-sm:text-base 2x-sm:text-lg x-sm:text-2xl sm:text-3xl md:text-4xl lg:text-[45px] xl:text-[58px] font-heading text-white italic tracking-wide font-semibold">
            NOTHING TO <span className="before:block before:absolute before:-inset-1 before:bg-brand-primaryAccent relative inline-block"><span className="relative text-black">LOSE</span></span> AND A <span className="before:block before:absolute before:-inset-1 before:bg-brand-primaryAccent relative inline-block"><span className="relative text-black">WORLD</span></span> TO SEE.
          </div>
        </div>
      </InfiniteBanner>
    </div>
  )
}

export default TextTicker;