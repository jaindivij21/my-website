'use client';

// Essential Imports
import { motion } from 'motion/react';
import { useState } from 'react';

// Component Imports
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/shared/ui/building-blocks/card';
import { AspectRatio } from '@/components/shared/ui/building-blocks/aspect-ratio';

// Utils and Models
import { FeaturedVideoModel } from './models/featured-highlights-card.model';
import useWindowSize from '@/lib/hooks/use-window-size';

// Constants
import {
  contentAnimationVariants,
  footerAnimationVariants
} from './constants/featured-highlights-card.constant';

const FeaturedVideo = () => {
  // State
  const [isHovering, setIsHovering] = useState(false);

  // Variables
  const { isMobile } = useWindowSize();
  const contentAnimationProps = !isMobile
    ? {
        initial: contentAnimationVariants.initial,
        animate: isHovering ? 'hover' : '',
        exit: contentAnimationVariants.exit,
        variants: contentAnimationVariants
      }
    : {};

  const footerAnimationProps = !isMobile
    ? {
        initial: footerAnimationVariants.initial,
        animate: isHovering ? 'hover' : '',
        exit: footerAnimationVariants.exit,
        variants: footerAnimationVariants
      }
    : {};

  const featuredVideo: FeaturedVideoModel = {
    section_name: 'Hymn Of The Beacon',
    section_description:
      'A visual and auditory experience that will leave you in awe around Diwali.',
    video: {
      url: 'https://www.youtube.com/embed/Biyb0QY0_Ak?si=i5E3tlbGzB2gktqH&rel=0&modestbranding=1',
      title: 'Hymn Of The Beacon'
    }
  };

  return (
    <div
      className='flex h-full w-full flex-col justify-between'
      onMouseEnter={!isMobile ? () => setIsHovering(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsHovering(false) : undefined}
    >
      <CardHeader className='bg-gradient-to-b from-black from-10% to-transparent p-3 sm:p-6'>
        <CardTitle className='font-heading text-lg font-semibold tracking-wide sm:text-2xl'>
          Featured Video
        </CardTitle>
        <CardDescription className='text-xs sm:text-sm'>
          Add an artful touch to elevate your surroundings.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex h-full cursor-pointer items-center justify-center p-0 px-3 sm:h-[30rem] sm:px-6'>
        <motion.div
          className='flex h-full w-full items-center'
          {...contentAnimationProps}
        >
          <AspectRatio ratio={16 / 9} className='rounded-3xl bg-muted'>
            <iframe
              id='featured-highlights-card-video'
              className='h-full w-full rounded-3xl border-0'
              src={featuredVideo.video.url}
              title={featuredVideo.video.title}
              allow='fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </AspectRatio>
        </motion.div>
      </CardContent>
      <motion.div {...footerAnimationProps}>
        <CardFooter className='flex flex-col items-start bg-gradient-to-t from-black from-10% to-transparent p-3 sm:p-6'>
          <h3 className='font-heading text-sm font-extralight tracking-wider sm:text-base'>
            {featuredVideo.section_name}
          </h3>
          <p className='text-xs text-muted-foreground sm:text-sm'>
            {featuredVideo.section_description}
          </p>
        </CardFooter>
      </motion.div>
    </div>
  );
};

export default FeaturedVideo;
