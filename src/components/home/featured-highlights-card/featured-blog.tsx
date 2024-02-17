"use client"

// Essential Imports
import Link from 'next/link'
import { motion } from "framer-motion";
import { useState } from 'react';
import Image from 'next/image'

// Component Imports
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shared/ui/building-blocks/card';

// Constants
import { contentAnimationVariants, footerAnimationVariants } from "./constants/featured-highlights-card.constant";

const FeaturedBlog = () => {
  // State
  const [isHovering, setIsHovering] = useState(false)

  // Variables
  const featuredBlog = {
    section_name: 'The Scattered Thoughts of a Creative Mind',
    section_description: 'This print was inspired by the chaotic nature of the creative process.',
    redirection_url: '/blog/lifestyle-travel',
    blog_post: {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      description: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    }
  }

  // Functions
  function _formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }


  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className='bg-gradient-to-b from-black from-10% to-transparent'>
        <CardTitle className='font-heading font-semibold tracking-wide'>Featured Blog</CardTitle>
        <CardDescription>Add an artful touch to elevate your surroundings.</CardDescription>
      </CardHeader>
      <CardContent className='flex h-[30rem] items-center justify-center p-0 px-6 cursor-pointer'>
        <motion.div
          className="w-full h-full"
          initial={contentAnimationVariants.initial}
          animate={isHovering ? "hover" : ""}
          exit={contentAnimationVariants.exit}
          variants={contentAnimationVariants}
        >
          <Link
            href={featuredBlog.redirection_url}
            className='block relative h-full w-full'
          >
            <Card className='flex flex-col w-full h-full bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-6'>
              <CardContent className='p-0 h-3/4 relative'>
                <Image
                  src={featuredBlog.blog_post.image_src}
                  alt={featuredBlog.blog_post.image_alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className='object-cover rounded-t-2xl'
                />
              </CardContent>
              <CardFooter className='p-0 px-4 grow bg-white bg-opacity-10 rounded-b-2xl'>
                <div className='flex flex-col space-y-2'>
                  <div className='flex flex-row justify-between'>
                    <h4 className='font-heading font-medium tracking-wide'>{featuredBlog.blog_post.title}</h4>
                    <div className='flex flex-row space-x-4'>
                      <h6 className='text-sm px-2.5 py-0.5 rounded-lg bg-black bg-opacity-20'>{_formatDate(featuredBlog.blog_post.published_at)}</h6>
                      <h6 className='text-sm px-2.5 py-0.5 rounded-lg bg-black bg-opacity-20'>{featuredBlog.blog_post.published_by}</h6>
                      <h6 className='text-sm px-2.5 py-0.5 rounded-lg bg-black bg-opacity-20'>{featuredBlog.blog_post.read_time}</h6>
                    </div>
                  </div>
                  <p className='line-clamp-2 text-sm text-muted-foreground'>{featuredBlog.blog_post.description}</p>
                </div>
              </CardFooter>
            </Card>
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
          <h3 className='font-heading font-extralight tracking-wider'>{featuredBlog.section_name}</h3>
          <p className='text-sm text-muted-foreground'>{featuredBlog.section_description}</p>
        </CardFooter>
      </motion.div>
    </div>
  )
}

export default FeaturedBlog;