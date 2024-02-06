// Component Imports
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shared/ui/building-blocks/card";
import { CarouselContent, CarouselItem } from "@/components/shared/ui/building-blocks/carousel";
import FeaturedPrint from "./featured-print"
import FeaturedVideo from "./featured-video"
import FeaturedBlog from "./featured-blog"

export const FeaturedHighlightsCardContent = () => {
  const featuredComponents = [FeaturedBlog, FeaturedVideo, FeaturedPrint];

  return (
    <CarouselContent>
      {featuredComponents.map((FeaturedComponent, index) => (
        <CarouselItem key={index} className="basis-9/12">
          <Card className="overflow-hidden bg-black/[.1] shadow-xl backdrop-blur-[1px] border-white/[.1]">
            <FeaturedComponent />
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  )
}

export default FeaturedHighlightsCardContent;