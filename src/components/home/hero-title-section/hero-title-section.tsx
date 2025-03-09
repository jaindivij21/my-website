'use client';

// Essential Imports
import { motion } from 'motion/react';

export const HeroTitleSection = () => {
  return (
    <motion.div
      className='group relative cursor-none'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='flex flex-col items-center transition-transform duration-500 group-hover:scale-105'>
        <div className='relative'>
          <motion.h2
            className='translate-x-0.5 transform font-handwriting1 text-3xl font-thin tracking-[.20em] text-brand-primary opacity-90 drop-shadow-[0_0_10px_rgba(248,248,18)] x-sm:text-4xl lg:text-6xl'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            In Pursuit Of
          </motion.h2>
        </div>
        <motion.h1
          className='text-brand-foreground xsm:text-5xl -mt-4 transform font-heading text-3xl font-thin drop-shadow-[2px_4px_10px_rgba(255,255,255,0.6)] x-sm:text-4xl lg:-mt-8 lg:text-8xl'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Living The Adventure
        </motion.h1>
      </div>
    </motion.div>
  );
};
