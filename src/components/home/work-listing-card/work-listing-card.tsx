"use client"

// Essential Imports
import { useRef } from 'react'
import Image from 'next/image'

// Component Imports
import { AspectRatio } from "@/components/shared/ui/building-blocks/aspect-ratio"
import { Card, CardContent, CardFooter } from "../../shared/ui/building-blocks/card"

// Util Imports
import { MotionValue, motion, useScroll, useSpring, useTransform } from "framer-motion"

// Constant Imports
import { IMAGE_URLS } from "./constants/work-listing-card.constant"
import backgroundGrid from '../../../../public/images/background-grid.svg'

// Component: Work Gallery Card
// Description: This component lists down all the works that I do.
export const WorksGalleryCard = () => {
  // Scroll Hook for the Progress Bar
  const cardScrollProgress = useScroll();
  const scaleX = useSpring(cardScrollProgress.scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax Hook for the Image Scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  // Functions
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  return (
    <div className='relative'>
      <Card
        className="drop-shadow-2xl h-[calc(100vh-15rem)] overflow-scroll snap-y snap-mandatory relative"
        style={{
          backgroundImage: `radial-gradient(ellipse, rgba(248,248,18,0.1) 20%, hsl(var(--background)) 75%), url(${backgroundGrid.src})`,
        }}
      >
        <CardContent className="p-10">
          {IMAGE_URLS.map((imageUrl, index) => (
            <section
              key={index}
              className='h-[calc(100vh-20rem)] snap-center flex items-center justify-center relative'
            >
              <div ref={ref} className='w-[390px] h-[520px] relative overflow-hidden'>
                <AspectRatio ratio={3 / 4}>
                  <Image
                    src={imageUrl.url}
                    alt={imageUrl.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className='absolute top-0 left-0 w-full h-full rounded-lg'
                  />
                </AspectRatio>
                {/* <motion.h2 className="absolute right-0 top-0" style={{ y }}>{`#00${index}`}</motion.h2> */}
              </div>
            </section>
          ))}
        </CardContent>
      </Card>
      <motion.div className="absolute bottom-16 left-0 right-0 h-2" style={{
        scaleX,
        background: 'radial-gradient(circle, rgba(248,248,18,0.5) 35%, rgba(9,9,11,0.60) 75%);'
      }} />
    </div>
  )
}

export default WorksGalleryCard