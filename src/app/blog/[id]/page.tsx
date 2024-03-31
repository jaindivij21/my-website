// Component Imports
import Image from 'next/image'
import { Card } from '@/components/shared/ui/building-blocks/card';

// Utils Imports
import { BlogModel } from "@/components/shared/ui/models/blog.model";
import { formatDate } from '@/lib/utils';
import parse from 'html-react-parser';

export default async function Blog() {
  const blogPost: BlogModel = {
    image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
    image_alt: 'Featured Blog Image',
    published_at: '2021-10-01T00:00:00.000Z',
    published_by: 'Divij Jain',
    read_time: '5 min',
    title: 'Why Travel Gets Me High',
    abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.',
    content: `<h1>Lorem Ipsum</h1><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing <b>elit</b> elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`
  }

  // Functions
  function _formatDate(date: string) {
    return formatDate(date, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }


  return (
    <>
      {/* Wrapper */}
      <div className="blog-page-wrapper">
        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          {/* Content */}
          <div className="flex flex-col space-y-10 pt-12 sm:pt-20">
            {/* SECTION: HERO IMAGE */}
            <Card className='border-0 overflow-hidden relative h-96'>
              <Image
                src={blogPost.image_src}
                alt={blogPost.image_alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className='object-cover'
              />
            </Card>

            {/* SECTION: BLOG */}
            <article className='flex flex-col space-y-16 px-4'>
              {/* SUBSECTION: TITLE */}
              <div className='flex flex-col space-y-4'>
                <h1 className='font-heading text-3xl 2x-sm:text-4xl font-medium'>{blogPost.title}</h1>
                <div className='flex flex-row space-x-4'>
                  <h6 className='font-mono text-xs 2x-sm:text-sm px-2.5 py-0.5 rounded-lg bg-white/20'>{_formatDate(blogPost.published_at)}</h6>
                  <h6 className='font-mono text-xs 2x-sm:text-sm px-2.5 py-0.5 rounded-lg bg-white/20'>{blogPost.published_by}</h6>
                  <h6 className='font-mono text-xs 2x-sm:text-sm px-2.5 py-0.5 rounded-lg bg-white/20'>{blogPost.read_time}</h6>
                </div>
              </div>

              {/* SUBSECTION: CONTENT */}
              <div>
                {parse(blogPost.content as string)}
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}