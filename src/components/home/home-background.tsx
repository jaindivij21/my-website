// Essential Imports
import Image from 'next/image'

// Styles and Assets
import mobileBackground from '../../../public/images/main-background-mobile.png'
import desktopBackground from '../../../public/images/main-background.png'

// Utility Imports
import { cn } from '@/lib/utils'

export default function HomeBackground(
  { className }: { className?: string }
) {
  return (
    <>
      {/* Mobile Background */}
      <Image
        alt="Website Background: An monotone image of a mountain range."
        src={mobileBackground}
        placeholder="blur"
        quality={100}
        style={{
          objectFit: 'cover',
          width: '100%',
          zIndex: -1,
        }}
        fetchPriority='high'
        className={cn('sm:hidden', className)}
      />

      {/* Desktop Background */}
      <Image
        alt="Website Background: An monotone image of a mountain range."
        src={desktopBackground}
        placeholder="blur"
        quality={100}
        style={{
          objectFit: 'cover',
          width: '100%',
          zIndex: -1,
        }}
        fetchPriority='high'
        className={cn('hidden sm:block', className)}
      />
    </>
  )
}

