'use client';

// Essential Imports
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

// Component Imports
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/shared/ui/building-blocks/card';

// Utility Imports
import { FeaturedBlogModel } from './models/featured-highlights-card.model';
import { useIsMobile } from '@/lib/hooks/use-mobile';

// Constants
import {
  contentAnimationVariants,
  footerAnimationVariants
} from './constants/featured-highlights-card.constant';
import { formatDate } from '@/lib/utils/common';

const FeaturedBlog = () => {
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

  const featuredBlog: FeaturedBlogModel = {
    section_name: 'The Scattered Thoughts of a Creative Mind',
    section_description:
      'This print was inspired by the chaotic nature of the creative process.',
    redirection_url: '/blog/lifestyle-travel',
    blog_post: {
      image_src:
        'https://res.cloudinary.com/dxeimkzxk/image/upload/1_q4b6bo.jpg',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract:
        'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
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
          Featured Blog
        </CardTitle>
        <CardDescription className='text-xs sm:text-sm'>
          Add an artful touch to elevate your surroundings.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex h-full cursor-pointer items-center justify-center p-0 px-3 sm:h-[30rem] sm:px-6'>
        <motion.div className='h-full w-full' {...contentAnimationProps}>
          <FeaturedBlogContent featuredBlog={featuredBlog} />
        </motion.div>
      </CardContent>
      <motion.div {...footerAnimationProps}>
        <CardFooter className='flex flex-col items-start bg-gradient-to-t from-black from-10% to-transparent p-3 sm:p-6'>
          <h3 className='font-heading text-sm font-extralight tracking-wider sm:text-base'>
            {featuredBlog.section_name}
          </h3>
          <p className='text-xs text-muted-foreground sm:text-sm'>
            {featuredBlog.section_description}
          </p>
        </CardFooter>
      </motion.div>
    </div>
  );
};

export default FeaturedBlog;

const FeaturedBlogContent = ({
  featuredBlog
}: {
  featuredBlog: FeaturedBlogModel;
}) => {
  return (
    <Link
      href={featuredBlog.redirection_url}
      className='relative block h-full w-full'
    >
      <Card className='flex h-full w-full flex-col rounded-3xl bg-white bg-opacity-10 p-3 backdrop-blur-sm sm:p-6'>
        <CardContent className='relative h-3/4 p-0'>
          <Image
            src={featuredBlog.blog_post.image_src}
            alt={featuredBlog.blog_post.image_alt}
            fill
            sizes='(max-width: 640px) 100vw, 33vw'
            className='rounded-t-2xl object-cover'
          />
        </CardContent>
        <CardFooter className='grow rounded-b-2xl bg-white bg-opacity-10 p-2 sm:p-4'>
          <div className='flex flex-col space-y-1 sm:space-y-2'>
            <div className='flex flex-col space-y-1.5 sm:flex-row sm:items-center sm:justify-between'>
              <h4 className='font-heading text-sm font-medium tracking-wide sm:text-base'>
                {featuredBlog.blog_post.title}
              </h4>
              <div className='flex flex-row space-x-4'>
                <h6 className='rounded-lg bg-black bg-opacity-20 px-2.5 py-0.5 text-xs sm:text-sm'>
                  {formatDate(featuredBlog.blog_post.published_at, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </h6>
                <h6 className='rounded-lg bg-black bg-opacity-20 px-2.5 py-0.5 text-xs sm:text-sm'>
                  {featuredBlog.blog_post.published_by}
                </h6>
                <h6 className='rounded-lg bg-black bg-opacity-20 px-2.5 py-0.5 text-xs sm:text-sm'>
                  {featuredBlog.blog_post.read_time}
                </h6>
              </div>
            </div>
            <p className='line-clamp-2 text-sm text-muted-foreground'>
              {featuredBlog.blog_post.abstract}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
