'use client';

// Essential Imports
import { motion } from 'motion/react';

// Component Imports
import { Button } from '@/components/shared/ui/building-blocks/button';

// Assets Imports
import {
  BuyMeCoffeeIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  PatreonIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/components/shared/icons';

// Component: Social Icon Links
// Description: Social Icon Links for the website's footer.
const SocialIconLinks = () => {
  return (
    <div className='lg:grid-flow-row-4 grid grid-cols-2 grid-rows-4 x-sm:gap-x-4 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-2 md:gap-y-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-0 lg:p-2.5 xl:gap-x-8'>
      {/* Twitter */}

      <motion.a
        href='https://twitter.com/jaindivij_'
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <TwitterIcon className='w-4 x-sm:w-6 lg:w-auto' />

          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            Twitter
          </Button>
        </div>
      </motion.a>

      {/* Linkedin */}
      <motion.a
        href='https://www.linkedin.com/in/jaindivij/'
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <LinkedInIcon className='w-4 x-sm:w-6 lg:w-auto' />
          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            LinkedIn
          </Button>
        </div>
      </motion.a>

      {/* Facebook */}
      <motion.a
        href='https://www.facebook.com/passing.into.oblivion'
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <FacebookIcon className='w-4 x-sm:w-6 lg:w-auto' />
          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            Facebook
          </Button>
        </div>
      </motion.a>

      {/* Instagram */}
      <motion.a
        href='https://www.youtube.com/channel/UCL5IczpWayaw1ZYJwNZE_0Q?view_as=subscriber'
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <InstagramIcon className='w-4 x-sm:w-6 lg:w-auto' />
          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            Instagram
          </Button>
        </div>
      </motion.a>

      {/* Youtube */}
      <motion.a
        href='https://www.instagram.com/passing.into.oblivion/'
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <YoutubeIcon className='w-4 x-sm:w-6 lg:w-auto' />
          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            Youtube
          </Button>
        </div>
      </motion.a>

      {/* Github */}
      <motion.a
        href='https://github.com/jaindivij21'
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <GithubIcon className='w-4 x-sm:w-6 lg:w-auto' />
          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            Github
          </Button>
        </div>
      </motion.a>

      {/* Patreon */}
      <motion.a
        href='https://www.instagram.com/passing.into.oblivion/'
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <PatreonIcon className='w-4 x-sm:w-6 lg:w-auto' />
          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            Patreon
          </Button>
        </div>
      </motion.a>

      {/* Buy Me A Coffee */}
      <motion.a
        href='https://www.instagram.com/passing.into.oblivion/'
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className='cursor-pointer'
      >
        <div className='flex items-center gap-1 x-sm:gap-2'>
          <BuyMeCoffeeIcon className='w-4 x-sm:w-6 lg:w-auto' />
          <Button
            className='h-8 px-0 text-[10px] 3x-sm:text-xs x-sm:text-sm lg:h-10 lg:px-4 lg:py-2'
            variant='ghost'
          >
            Buy Me Coffee
          </Button>
        </div>
      </motion.a>
    </div>
  );
};

export default SocialIconLinks;
