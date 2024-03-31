"use client";

// Component Imports
import { Card } from "@/components/shared/ui/building-blocks/card";
import Image from 'next/image'

// Utils Imports
import { cn, formatDate } from "@/lib/utils";
import { BlogListCardPropsModel } from "../../models/blog.model";
import { motion } from "framer-motion";

export const BlogListCard = ({ blogPost, index }: BlogListCardPropsModel) => {
  // Functions
  function _formatDate(date: string) {
    return formatDate(date, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return (
    <motion.div
      key={index}
      className={cn("relative overflow-hidden h-[400px] cursor-pointer rounded-lg", `${index === 0 ? 'x-sm:col-span-2' : ''}`)}
      whileHover={{ scale: 0.95 }}
    >
      <Card>
        <Image
          src={blogPost.image_src}
          alt={blogPost.image_alt}
          fill
          sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className='object-cover'
        />
        <div className="absolute bottom-0 w-full">
          <div className='flex flex-col p-6 space-y-2'>
            <h4 className='text-lg sm:text-base font-heading font-medium tracking-wide'>{blogPost.title}</h4>
            <div className='flex flex-row space-x-4'>
              <h6 className='text-sm px-2.5 py-0.5 rounded-lg bg-black bg-opacity-20'>{_formatDate(blogPost.published_at)}</h6>
              <h6 className='text-sm px-2.5 py-0.5 rounded-lg bg-black bg-opacity-20'>{blogPost.read_time}</h6>
            </div>
          </div>
        </div>
      </Card>
    </motion.div >
  )
}