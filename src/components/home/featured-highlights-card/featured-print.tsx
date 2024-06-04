"use client"

// Essential Imports
import Link from 'next/link'
import { motion } from "framer-motion";
import Image from 'next/image'
import { useState } from 'react';

// Component Imports
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shared/ui/building-blocks/card';

// Utils and Models
import useWindowSize from "@/lib/hooks/use-window-size";
import { FeaturedPrintModel } from './models/featured-highlights-card.model';

// Constants
import { contentAnimationVariants, footerAnimationVariants } from "./constants/featured-highlights-card.constant";

const FeaturedPrint = () => {
  // State
  const [isHovering, setIsHovering] = useState(false)

  // Variables
  const { isMobile } = useWindowSize();
  const contentAnimationProps = !isMobile
    ? {
      initial: contentAnimationVariants.initial,
      animate: isHovering ? "hover" : "",
      exit: contentAnimationVariants.exit,
      variants: contentAnimationVariants,
    } : {};

  const footerAnimationProps = !isMobile
    ? {
      initial: footerAnimationVariants.initial,
      animate: isHovering ? "hover" : "",
      exit: footerAnimationVariants.exit,
      variants: footerAnimationVariants,
    } : {};

  const featuredPrint: FeaturedPrintModel = {
    section_name: 'The Scattered Thoughts of a Creative Mind',
    section_description: 'This print was inspired by the chaotic nature of the creative process.',
    redirection_url: '/shop',
    print: {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV84DTv7KM_4rOBKLIFmRzHlzBbrGwQ3wKCBj4FgXe2sbeZkayDOsVjEUtWxnsZFYH-eht-ZzEeuDVf3l4ae1KaK5_jb0cqgDOEB6GHdAgxVuhNjPoNo_3L3fD2vBVJ4_XzBhuD6y5U33aG5lVxntr9YULQ=w3124-h2082-s-no-gm',
      image_alt: 'The Scattered Thoughts of a Creative Mind'
    }
  }

  return (
    <div
      className='h-full w-full flex flex-col justify-between'
      onMouseEnter={!isMobile ? () => setIsHovering(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsHovering(false) : undefined}
    >
      <CardHeader className='bg-gradient-to-b from-black from-10% to-transparent p-3 sm:p-6'>
        <CardTitle className='text-lg sm:text-2xl font-heading font-semibold tracking-wide'>Featured Print</CardTitle>
        <CardDescription className='text-xs	sm:text-sm'>Add an artful touch to elevate your surroundings.</CardDescription>
      </CardHeader>
      <CardContent className='flex h-full sm:h-[30rem] items-center justify-center p-0 px-3 sm:px-6 cursor-pointer'>
        <motion.div className="w-full h-full " {...contentAnimationProps}>
          <Link
            href={featuredPrint.redirection_url}
            className='block relative h-full w-full'
          >
            <Image
              src={featuredPrint.print.image_src}
              alt={featuredPrint.print.image_alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className='object-cover rounded-3xl'
            />
          </Link>
        </motion.div>
      </CardContent>
      <motion.div {...footerAnimationProps}>
        <CardFooter className='p-3 sm:p-6 flex flex-col items-start bg-gradient-to-t from-black from-10% to-transparent'>
          <h3 className='text-sm sm:text-base font-heading font-extralight tracking-wider'>{featuredPrint.section_name}</h3>
          <p className='text-xs	sm:text-sm text-muted-foreground'>{featuredPrint.section_description}</p>
        </CardFooter>
      </motion.div>
    </div>
  )
}

export default FeaturedPrint;