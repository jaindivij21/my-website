"use client"

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { use, useEffect } from "react";

// Component: OrbitingText
const OrbitingText = (
  { divRef }: { divRef: React.RefObject<HTMLDivElement> }
) => {

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["center end", "end end"]
  })
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]))
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]))
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]))
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]))
  return (
    <motion.div
      className="absolute top-3/4 left-0"
      style={{
        x: translateX,
        y: translateY,
        scale: scale,
        opacity: opacity
      }}
    >
      <div className="-rotate-[12deg] -skew-y-6 font-handwriting1 text-brand-primary text-5xl">
        Nothing To Lose And A World To See
      </div>
    </motion.div>
  )

}

export default OrbitingText;
