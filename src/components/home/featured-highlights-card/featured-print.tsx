"use client"

// Essential Imports
import Link from 'next/link'
import { motion } from "framer-motion";
import Image from 'next/image'
import { useState } from 'react';

// Component Imports
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shared/ui/building-blocks/card';

// Constants
import { contentAnimationVariants, footerAnimationVariants } from "./constants/featured-highlights-card.constant";

const FeaturedPrint = () => {
  const print = {
    src: 'https://lh3.googleusercontent.com/pw/ABLVV84DTv7KM_4rOBKLIFmRzHlzBbrGwQ3wKCBj4FgXe2sbeZkayDOsVjEUtWxnsZFYH-eht-ZzEeuDVf3l4ae1KaK5_jb0cqgDOEB6GHdAgxVuhNjPoNo_3L3fD2vBVJ4_XzBhuD6y5U33aG5lVxntr9YULQ=w3124-h2082-s-no-gm',
    redirection_url: '/shop',
    name: 'The Scattered Thoughts of a Creative Mind',
    description: 'This print was inspired by the chaotic nature of the creative process.',
  }

  // State
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className='bg-gradient-to-b from-black from-10% to-transparent'>
        <CardTitle className='font-heading font-semibold tracking-wide'>Featured Print</CardTitle>
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
          <Link
            href={print.redirection_url}
            className='block relative h-full w-full'
          >
            <Image
              src={print.src}
              alt={print.name}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className='object-cover rounded-3xl'
            />
          </Link>
        </motion.div>
      </CardContent>
      <motion.div
        initial={footerAnimationVariants.initial}
        animate={isHovering ? "hover" : ""}
        exit={footerAnimationVariants.exit}
        variants={footerAnimationVariants}
      >
        <CardFooter className='p-6 flex flex-col items-start bg-gradient-to-t from-black from-10% to-transparent'>
          <h3 className='font-heading font-extralight tracking-wider'>{print.name}</h3>
          <p className='text-sm text-muted-foreground'>{print.description}</p>
        </CardFooter>
      </motion.div>
    </div>
  )
}

export default FeaturedPrint;