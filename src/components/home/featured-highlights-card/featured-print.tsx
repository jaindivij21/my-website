'use client';

// Essential Imports
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

// Component Imports
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/shared/ui/building-blocks/card';

// Utils and Models
import { FeaturedPrintModel } from './models/featured-highlights-card.model';
import { useIsMobile } from '@/lib/hooks/use-mobile';

// Constants
import {
  contentAnimationVariants,
  footerAnimationVariants
} from './constants/featured-highlights-card.constant';

const FeaturedPrint = () => {
  // State
  const [isHovering, setIsHovering] = useState(false);

  // Variables
  const isMobile = useIsMobile();
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

  const featuredPrint: FeaturedPrintModel = {
    section_name: 'The Scattered Thoughts of a Creative Mind',
    section_description:
      'This print was inspired by the chaotic nature of the creative process.',
    redirection_url: '/shop',
    print: {
      image_src:
        'https://res.cloudinary.com/dxeimkzxk/image/upload/2_wfyy9h.jpg',
      image_alt: 'The Scattered Thoughts of a Creative Mind'
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
          Featured Print
        </CardTitle>
        <CardDescription className='text-xs sm:text-sm'>
          Add an artful touch to elevate your surroundings.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex h-full cursor-pointer items-center justify-center p-0 px-3 sm:h-[30rem] sm:px-6'>
        <motion.div className='h-full w-full' {...contentAnimationProps}>
          <Link
            href={featuredPrint.redirection_url}
            className='relative block h-full w-full'
          >
            <Image
              src={featuredPrint.print.image_src}
              alt={featuredPrint.print.image_alt}
              fill
              sizes='(max-width: 640px) 100vw, 33vw'
              className='rounded-3xl object-cover'
            />
          </Link>
        </motion.div>
      </CardContent>
      <motion.div {...footerAnimationProps}>
        <CardFooter className='flex flex-col items-start bg-gradient-to-t from-black from-10% to-transparent p-3 sm:p-6'>
          <h3 className='font-heading text-sm font-extralight tracking-wider sm:text-base'>
            {featuredPrint.section_name}
          </h3>
          <p className='text-xs text-muted-foreground sm:text-sm'>
            {featuredPrint.section_description}
          </p>
        </CardFooter>
      </motion.div>
    </div>
  );
};

export default FeaturedPrint;
