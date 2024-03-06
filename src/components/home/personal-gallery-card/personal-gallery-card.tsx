// Component Imports
import { Card, CardContent, CardHeader } from "../../shared/ui/building-blocks/card"
import TypewriterText from "../../shared/ui/generic/typewriter-text/typewriter-text"
import InfiniteGallery from "./infinite-gallery"

// Component: Personal Gallery Card
// Description: This component is an displays my photos and a small description of my life.
export const PersonalGalleryCard = () => {
  return (
    <Card
      className="drop-shadow-2xl h-[32rem] overflow-hidden will-change-transform"
    >
      <CardHeader
        className="z-10 absolute flex justify-center text-center left-1/2 transform -translate-x-1/2 h-full w-full font-handwriting1 text-4xl 2x-sm:text-5xl md:text-6xl lg:text-8xl text-brand-text font-bold"
      >
        <TypewriterText
          sequence={["Divij's Visual Odyssey..", 2000, "Welcome Onboard!", 1000]}
        />
      </CardHeader>
      <CardContent className="p-10">
        <InfiniteGallery />
      </CardContent>
    </Card>
  )
}

export default PersonalGalleryCard