"use client"

// Essential Imports
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

// Component Imports
import { Card, CardContent } from "../../shared/ui/building-blocks/card"

// Asset Imports
import backgroundGrid from '../../../../public/images/background-grid.svg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/shared/ui/building-blocks/carousel"
import FeaturedPrint from "./featured-print"
import FeaturedVideo from "./featured-video"
import FeaturedBlog from "./featured-blog"

// Component: Featured Highlights Card
// Description: This component displays the featured content on the home page.
export const FeaturedHighlightsCard = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const cardRef = useRef(null);

  const featuredComponents = [FeaturedBlog, FeaturedVideo, FeaturedPrint];

  return (
    <Card
      ref={cardRef}
      className="drop-shadow-2xl h-[32rem] overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(ellipse, rgba(248,248,18,0.1) 20%, hsl(var(--background)) 75%), url(${backgroundGrid.src})`,
      }}
    >
      <CardContent className="py-10 px-0 h-full flex justify-center items-center">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            container: cardRef.current,
            align: 'center',
            containScroll: false,
            loop: true
          }}
          className="w-full max-w-[90%]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {featuredComponents.map((FeaturedComponent, index) => (
              <CarouselItem key={index} className="basis-4/5">
                <Card className="h-96 bg-white/[.1] shadow-xl backdrop-blur-[1px] border-dotted rounded-lg border-white/[.1]">
                  <FeaturedComponent />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default FeaturedHighlightsCard;