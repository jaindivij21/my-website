"use client"

// Essential Imports
import { motion } from "framer-motion";
import { useState } from "react";

// Component Imports
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shared/ui/building-blocks/card';

// Constants
import { contentAnimationVariants, footerAnimationVariants } from "./constants/featured-highlights-card.constant";

const FeaturedVideo = () => {
  const video = {
    name: 'Hymn Of The Beacon',
    description: 'A visual and auditory experience that will leave you in awe around Diwali.',
  }

  // State
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className='bg-gradient-to-b from-black from-10% to-transparent'>
        <CardTitle className='font-heading font-semibold tracking-wide'>Featured Video</CardTitle>
        <CardDescription>Add an artful touch to elevate your surroundings.</CardDescription>
      </CardHeader>
      <CardContent className='cursor-pointer flex h-[30rem] items-center justify-center p-0 px-6'>
        <motion.div
          className="w-full h-full"
          initial={contentAnimationVariants.initial}
          animate={isHovering ? "hover" : ""}
          exit={contentAnimationVariants.exit}
          variants={contentAnimationVariants}
        >
          <iframe
            id="featured-highlights-card-video"
            className="w-full h-full border-0 rounded-lg"
            src="https://www.youtube.com/embed/Biyb0QY0_Ak?si=i5E3tlbGzB2gktqH&rel=0&controls=0&modestbranding=1"
            title="Hymn Of The Beacon"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </motion.div>
      </CardContent>
      <motion.div
        initial={footerAnimationVariants.initial}
        animate={isHovering ? "hover" : ""}
        exit={footerAnimationVariants.exit}
        variants={footerAnimationVariants}
      >
        <CardFooter className='max-h-24	p-6 flex flex-col items-start bg-gradient-to-t from-black from-10% to-transparent'>
          <h3 className='font-heading font-extralight tracking-wider'>{video.name}</h3>
          <p className='text-sm text-muted-foreground'>{video.description}</p>
        </CardFooter>
      </motion.div>
    </div>
  )
}

export default FeaturedVideo;