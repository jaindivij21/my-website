import Image from 'next/image'
import mobileBackground from '../../../public/images/main-background-mobile.png'
import desktopBackground from '../../../public/images/main-background.png'

export default function HomeBackground() {
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
        }}
        fetchPriority='high'
        className='sm:hidden'
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
        }}
        fetchPriority='high'
        className='hidden sm:block'
      />
    </>
  )
}

