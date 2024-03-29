// Component Imports
import { Card } from "@/components/shared/ui/building-blocks/card";
import { CarouselContent, CarouselItem } from "@/components/shared/ui/building-blocks/carousel";
import FeaturedPrint from "./featured-print"
import FeaturedVideo from "./featured-video"
import FeaturedBlog from "./featured-blog"

export const FeaturedHighlightsCardContent = () => {
  // const featuredComponents = [FeaturedBlog];
  const featuredComponents = [FeaturedBlog, FeaturedVideo, FeaturedPrint];

  return (
    <CarouselContent className="h-full">
      {featuredComponents.map((FeaturedComponent, index) => (
        <CarouselItem key={index} className="basis-full sm:basis-9/12">
          <Card className="overflow-hidden h-full bg-black/[.1] shadow-xl backdrop-blur-[1px] border-white/[.1] border-0 sm:border">
            <FeaturedComponent />
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  )
}

export default FeaturedHighlightsCardContent;