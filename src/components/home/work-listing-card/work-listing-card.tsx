'use client';

// Essential Imports
import { RefObject, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Component Imports
import { AspectRatio } from '@/components/shared/ui/building-blocks/aspect-ratio';
import { Card, CardContent } from '../../shared/ui/building-blocks/card';

// Util Imports
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform
} from 'motion/react';
import useWindowSize from '@/lib/hooks/use-window-size';

// Constant and Interface Imports
import { WORK_LISTINGS } from './constants/work-listing-card.constant';
import { WorkItem } from './models/work-listing.model';

// Asset Imports
import backgroundGrid from '../../../../public/images/background-grid.svg';
import Icon from '@/components/shared/ui/building-blocks/icon';

// Functions
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Component: Work Listing Card
// Description: This component lists down all the works that I do.
export const WorksListingCard = () => {
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
        className='no-scrollbar relative h-[32rem] snap-y snap-mandatory overflow-scroll drop-shadow-2xl'
        style={{
          backgroundImage: `radial-gradient(ellipse, rgba(248,248,18,0.1) 20%, hsl(var(--background)) 75%), url(${backgroundGrid.src})`
        }}
      >
        <CardContent className='p-0'>
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
      <motion.div
        className='absolute bottom-2 left-0 right-0 mx-auto my-0 h-2 max-w-[90%] sm:bottom-4'
        style={{
          scaleX,
          background:
            'radial-gradient(circle, rgba(248,248,18,0.5) 35%, rgba(9,9,11,0.60) 75%)'
        }}
      />
    </div>
  );
};

const WorkListingItem = ({
  cardRef,
  workItem,
  index
}: {
  cardRef: RefObject<HTMLDivElement>;
  workItem: WorkItem;
  index: number;
}) => {
  const { isMobile } = useWindowSize();
  const router = useRouter();

  // Parallax Hook for the Image Scroll
  const imageRef = useRef(null);
  const imageScrollProgress = useScroll({
    container: cardRef,
    target: imageRef,
    layoutEffect: false
  });
  const y = useParallax(imageScrollProgress.scrollYProgress, 300);

  return (
    <section className='relative h-[32rem] snap-center p-6'>
      <div className='flex h-full flex-row items-center justify-evenly gap-x-9'>
        {!isMobile && (
          <div className='flex h-full basis-1/2 flex-col justify-center gap-y-2.5'>
            <WorkListingItemDescription workItem={workItem} />
          </div>
        )}

        {/* Image */}
        <motion.div
          ref={imageRef}
          className='relative h-[400px] w-[300px] cursor-pointer'
          whileHover={{
            scale: 1.03,
            skewY: 2,
            borderRadius: '8px',
            boxShadow: '0px 0px 30px 0px rgba(255,255,255,0.3)',
            transition: {
              duration: 0.5
            }
          }}
          onClick={() => router.push(workItem.link)}
        >
          <AspectRatio ratio={3 / 4}>
            <Image
              src={workItem.image_url}
              alt={workItem.image_alt}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              className='h-full w-full rounded-lg'
            />
          </AspectRatio>
          {isMobile && (
            <>
              <div className='absolute bottom-5 z-10 w-full px-5'>
                <WorkListingItemDescription workItem={workItem} />
              </div>
              <div className='m:from-black absolute inset-0 w-full rounded-lg bg-gradient-to-t from-black from-30% to-transparent 3x-sm:from-10%'></div>
            </>
          )}
        </motion.div>
      </div>

      {/* Indexes */}
      <motion.h2
        className='absolute right-[5%] top-32 font-mono text-5xl font-extrabold tracking-wide drop-shadow-[5px_10px_20px_rgb(255,255,255)] xl:text-6xl'
        style={{ y }}
      >
        {`#00${index}`}
      </motion.h2>

      {/* Chevrons */}
      {index === 0 || index === WORK_LISTINGS.length - 1 ? (
        <div className='absolute bottom-2.5 right-2.5 animate-bounce opacity-40'>
          {index === 0 ? (
            <Icon name='chevrons-down' />
          ) : (
            <Icon name='chevrons-up' />
          )}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

const WorkListingItemDescription = ({ workItem }: { workItem: WorkItem }) => {
  return (
    <>
      <h2 className='mb-8 font-handwriting2 text-3xl tracking-wide sm:text-4xl xl:text-5xl'>
        <span className='bg-gradient-radial from-[#F0E703] to-[#B3DFA1] bg-clip-text text-transparent'>
          {workItem.heading}
        </span>
      </h2>
      <div className='mb-2 flex flex-row items-center sm:mb-0'>
        <Icon
          name={workItem.icon_name}
          className='mr-2 h-4 w-4 sm:mr-4 sm:h-6 sm:w-6'
        />
        <h4 className='font-heading text-sm font-semibold uppercase tracking-wider 3x-sm:text-lg sm:text-xl xl:text-2xl'>
          {workItem.subheading}
        </h4>
      </div>
      <p className='text-xs text-gray-200 sm:text-base sm:leading-6 sm:tracking-wide'>
        {workItem.description}
      </p>
    </>
  );
};

export default WorksListingCard;
