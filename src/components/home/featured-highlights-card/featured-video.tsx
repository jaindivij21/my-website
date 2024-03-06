"use client"

// Essential Imports
import { motion } from "framer-motion";
import { useState } from "react";

// Component Imports
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shared/ui/building-blocks/card';
import { AspectRatio } from "@/components/shared/ui/building-blocks/aspect-ratio";

// Utils and Models
import { FeaturedVideoModel } from "./models/featured-highlights-card.model";
import useWindowSize from "@/lib/hooks/use-window-size";

// Constants
import { contentAnimationVariants, footerAnimationVariants } from "./constants/featured-highlights-card.constant";


const FeaturedVideo = () => {
  // State
  const [isHovering, setIsHovering] = useState(false)

  // Variables
  const { isDesktop } = useWindowSize();
  const contentAnimationProps = isDesktop
    ? {
      initial: contentAnimationVariants.initial,
      animate: isHovering ? "hover" : "",
      exit: contentAnimationVariants.exit,
      variants: contentAnimationVariants,
    } : {};

  const footerAnimationProps = isDesktop
    ? {
      initial: footerAnimationVariants.initial,
      animate: isHovering ? "hover" : "",
      exit: footerAnimationVariants.exit,
      variants: footerAnimationVariants,
    } : {};

  const featuredVideo: FeaturedVideoModel = {
    section_name: 'Hymn Of The Beacon',
    section_description: 'A visual and auditory experience that will leave you in awe around Diwali.',
    video: {
      url: 'https://www.youtube.com/embed/Biyb0QY0_Ak?si=i5E3tlbGzB2gktqH&rel=0&modestbranding=1',
      title: 'Hymn Of The Beacon',
    }
  }

  return (
    <div
      className='h-full w-full flex flex-col justify-between'
      onMouseEnter={isDesktop ? () => setIsHovering(true) : undefined}
      onMouseLeave={isDesktop ? () => setIsHovering(false) : undefined}
    >
      <CardHeader className='bg-gradient-to-b from-black from-10% to-transparent p-3 sm:p-6'>
        <CardTitle className='text-lg sm:text-2xl font-heading font-semibold tracking-wide'>Featured Video</CardTitle>
        <CardDescription className='text-xs	sm:text-sm'>Add an artful touch to elevate your surroundings.</CardDescription>
      </CardHeader>
      <CardContent className='flex h-full sm:h-[30rem] items-center justify-center p-0 px-3 sm:px-6 cursor-pointer'>
        <motion.div className="w-full h-full flex items-center" {...contentAnimationProps}>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-3xl">
            <iframe
              id="featured-highlights-card-video"
              className="w-full h-full border-0 rounded-3xl"
              src={featuredVideo.video.url}
              title={featuredVideo.video.title}
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
          </AspectRatio>
        </motion.div>
      </CardContent>
      <motion.div {...footerAnimationProps}>
        <CardFooter className='p-3 sm:p-6 flex flex-col items-start bg-gradient-to-t from-black from-10% to-transparent'>
          <h3 className='text-sm sm:text-base font-heading font-extralight tracking-wider'>{featuredVideo.section_name}</h3>
          <p className='text-xs	sm:text-sm text-muted-foreground'>{featuredVideo.section_description}</p>
        </CardFooter>
      </motion.div>
    </div>
  )
}

export default FeaturedVideo;