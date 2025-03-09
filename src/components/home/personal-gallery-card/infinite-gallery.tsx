'use client';

// Essential Imports
import Image from 'next/image';

// Utils Imports
import { cn } from '@/lib/utils/common';

// Asset Imports
import { IMAGE_URLS } from './constants/infinite-gallery.constant';

// Component: InfiniteGallery
// Description: This component is an Infinite Auto-Scrolling Gallery Card that displays the my photos.
export const InfiniteGallery = () => {
  const animationClassNames =
    "animate-personal-gallery-images after:animate-personal-gallery-grain after:bg-grain after:bg-repeat after:content-[''] after:opacity-5 after:h-[300%] after:w-[300%] after:pointer-events-none after:fixed after:transition-opacity after:will-change-transform after:z-[1] after:left-[-100%] after:top-[-100%]";

  return (
    <div className='opacity-80'>
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className={cn(
            'mb-4 grid grid-cols-2 gap-4 md:grid-cols-4',
            animationClassNames
          )}
        >
          {IMAGE_URLS.map((imageGroup, groupIndex) => (
            <div key={groupIndex} className='grid gap-4'>
              {imageGroup.map((image, index) => (
                <figure key={index} className='gallery__figure'>
                  <Image
                    src={image.url}
                    alt='Divij Jain'
                    height={image.height}
                    width={image.width}
                    style={{
                      objectFit: 'cover'
                    }}
                    className={`gallery__image h-auto max-w-full rounded-lg`}
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InfiniteGallery;
