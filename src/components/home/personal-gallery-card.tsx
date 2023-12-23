// Component Imports
import { Card, CardContent } from "../shared/ui/building-blocks/card"
import InfiniteGallery from "./infinite-gallery/infinite-gallery"

// Component: Personal Gallery Card
// Description: This component is an displays my photos and a small description of my life.
export const PersonalGalleryCard = () => {
  return (
    <>
      <div className="relative top-5 left-7 z-[1]">
        <div className="font-heading text-3xl x-sm:text-4xl lg:text-5xl xl:text-6xl">
          <span className="bg-gradient-to-t from-background from-80% to-transparent">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground from-40% to-background">
              Life in Frames ;)
            </span>
          </span>
        </div>
      </div >

      <Card
        className="drop-shadow-2xl h-72 lg:h-[42rem] overflow-hidden"
      >
        <CardContent className="p-10">
          <InfiniteGallery />
        </CardContent>
      </Card>
    </>
  )
}

export default PersonalGalleryCard