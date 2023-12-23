// Essential Imports
import Image from 'next/image'

// Asset Imports
import { IMAGE_URLS } from './constants/infinite-gallery.constant'

// Component: InfiniteGallery
// Description: This component is an Infinite Auto-Scrolling Gallery Card that displays the my photos.
export const InfiniteGallery = () => {

  return (
    <div
      id='infinite-gallery'
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {IMAGE_URLS.map((imageGroup, groupIndex) => (
        <div key={groupIndex} className="grid gap-4">
          {imageGroup.map((image, index) => (
            <figure key={index} className="gallery__figure">
              <Image
                src={image.url}
                alt='Divij Jain'
                height={image.height}
                width={image.width}
                style={{
                  objectFit: 'cover',
                }}
                className={`h-auto max-w-full rounded-lg gallery__image`}
              />
            </figure>
          ))}
        </div>
      ))}
    </div>
  )
}

export default InfiniteGallery