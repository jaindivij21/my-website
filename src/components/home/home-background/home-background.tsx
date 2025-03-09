// Essential Imports
import Image from 'next/image';

// Styles and Assets
import mobileBackground from '../../../../public/images/main-background-mobile.png';
import desktopBackground from '../../../../public/images/main-background.png';

// Utility Imports
import { cn } from '@/lib/utils/common';
import { HomeBackgroundProps } from './interfaces/home-background.interface';

export default function HomeBackground({
  className,
  priority = true
}: HomeBackgroundProps) {
  return (
    <>
      {/* Mobile Background */}
      <Image
        alt='Website Background: A monotone image of a mountain range'
        src={mobileBackground}
        placeholder='blur'
        quality={85}
        priority={priority}
        sizes='100vw'
        style={{
          objectFit: 'cover',
          width: '100%',
          zIndex: -1
        }}
        className={cn(
          'fixed inset-0 transition-opacity duration-300',
          'sm:hidden',
          className
        )}
      />

      {/* Desktop Background */}
      <Image
        alt='Website Background: A monotone image of a mountain range'
        src={desktopBackground}
        placeholder='blur'
        quality={85}
        priority={priority}
        sizes='100vw'
        style={{
          objectFit: 'cover',
          width: '100%',
          zIndex: -1
        }}
        className={cn(
          'fixed inset-0 transition-opacity duration-300',
          'hidden sm:block',
          className
        )}
      />
    </>
  );
}
