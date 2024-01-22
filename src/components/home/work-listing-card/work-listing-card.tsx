"use client"

// Essential Imports
import { RefObject, useRef } from 'react'
import Image from 'next/image'

// Component Imports
import { AspectRatio } from "@/components/shared/ui/building-blocks/aspect-ratio"
import { Card, CardContent } from "../../shared/ui/building-blocks/card"

// Util Imports
import { MotionValue, motion, useScroll, useSpring, useTransform } from "framer-motion"
import useWindowSize from '@/lib/hooks/use-window-size'

// Constant and Interface Imports
import { WORK_LISTINGS } from "./constants/work-listing-card.constant"
import { WorkItem } from './models/work-listing.model'

// Asset Imports
import backgroundGrid from '../../../../public/images/background-grid.svg'
import { ChevronsUp, ChevronsDown } from 'lucide-react';
import Icon from '@/components/shared/ui/building-blocks/icon'

// Functions
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Component: Work Gallery Card
// Description: This component lists down all the works that I do.
export const WorksGalleryCard = () => {
  // Scroll Hook for the Progress Bar
  const cardRef = useRef(null);
  const cardScrollProgress = useScroll({
    container: cardRef
  });
  const scaleX = useSpring(cardScrollProgress.scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className='relative'>
      <Card
        ref={cardRef}
        className="drop-shadow-2xl h-[calc(100vh-16rem)] sm:h-[calc(100vh-12rem)] overflow-scroll snap-y snap-mandatory relative"
        style={{
          backgroundImage: `radial-gradient(ellipse, rgba(248,248,18,0.1) 20%, hsl(var(--background)) 75%), url(${backgroundGrid.src})`,
        }}
      >
        <CardContent className="p-10 space-y-5">
          {WORK_LISTINGS.map((workItem, index) => (
            <WorkListingItem
              cardRef={cardRef}
              key={index}
              workItem={workItem}
              index={index}
            />
          ))}
        </CardContent>
      </Card>
      <motion.div className="max-w-[90%] mx-auto my-0 absolute bottom-2 sm:bottom-16 left-0 right-0 h-2" style={{
        scaleX,
        background: 'radial-gradient(circle, rgba(248,248,18,0.5) 35%, rgba(9,9,11,0.60) 75%)'
      }} />
    </div>
  )
}

const WorkListingItem = ({ cardRef, workItem, index }: {
  cardRef: RefObject<HTMLDivElement>,
  workItem: WorkItem,
  index: number
}) => {
  const { isMobile } = useWindowSize();

  // Parallax Hook for the Image Scroll
  const imageRef = useRef(null);
  const imageScrollProgress = useScroll({
    container: cardRef,
    target: imageRef,
    layoutEffect: false
  });
  const y = useParallax(imageScrollProgress.scrollYProgress, 300);

  return (
    <section className='h-[calc(100vh-21rem)] sm:h-[calc(100vh-17rem)] snap-center relative'>
      <div className='relative h-full flex flex-row justify-evenly items-center'>
        {!isMobile && (
          <div className='basis-1/2 h-full flex flex-col justify-center gap-y-2.5'>
            <WorkListingItemDescription workItem={workItem} />
          </div>
        )}

        <div ref={imageRef} className='relative w-[390px] h-[520px] sm:w-[300px] sm:h-[400px] lg:w-[360px] lg:h-[480px] xl:w-[390px] xl:h-[520px]'>
          <AspectRatio ratio={3 / 4}>
            <Image
              src={workItem.image_url}
              alt={workItem.image_alt}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: "cover" }}
              className='w-full h-full rounded-lg'
            />
          </AspectRatio>
          {isMobile && (
            <>
              <div className='w-full absolute bottom-6 z-10 px-6'>
                <WorkListingItemDescription workItem={workItem} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black from-10% to-transparent w-full"></div>
            </>
          )}
        </div>
      </div>

      {/* Indexes */}
      <motion.h2
        className='absolute right-0 top-36 font-mono font-extrabold tracking-wide text-5xl xl:text-6xl drop-shadow-[5px_10px_20px_rgb(255,255,255)]'
        style={{ y }}
      >
        {`#00${index}`}
      </motion.h2>

      {/* Chevrons */}
      {
        index === 0 || index === WORK_LISTINGS.length - 1 ? (
          <div className='absolute right-0 bottom-8 animate-bounce opacity-40'>
            {index === 0 ? <ChevronsDown /> : <ChevronsUp />}
          </div>
        ) : <></>
      }
    </section>
  )
}

const WorkListingItemDescription = ({ workItem }: { workItem: WorkItem }) => {
  return (
    <>
      <h2 className='text-3xl sm:text-4xl xl:text-5xl font-handwriting2 tracking-wide mb-8'>
        <span className='bg-clip-text text-transparent bg-gradient-radial from-[#F0E703] to-[#B3DFA1]'>
          {workItem.heading}
        </span>
      </h2>
      <div className='mb-2 sm:mb-0 flex flex-row items-center'>
        <Icon name={workItem.icon_name} className='w-4 h-4 mr-2 sm:w-6 sm:h-6 sm:mr-4' />
        <h4 className='text-lg sm:text-xl xl:text-2xl font-heading tracking-wider uppercase font-semibold'>
          {workItem.subheading}
        </h4>
      </div>
      <p className='text-xs sm:text-base sm:tracking-wide sm:leading-6 text-gray-200'>{workItem.description}</p>
    </>
  )
}

export default WorksGalleryCard