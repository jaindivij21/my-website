'use client';

// Essential Imports
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

// Component Imports
import { Card, CardContent } from '../../shared/ui/building-blocks/card';

// Asset Imports
import backgroundGrid from '../../../../public/images/background-grid.svg';
import {
  Carousel,
  CarouselNext,
  CarouselPrevious
} from '@/components/shared/ui/building-blocks/carousel';

// Component: Featured Highlights Card
// Description: This component displays the featured content on the home page.
export const FeaturedHighlightsCard = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const cardRef = useRef(null);

  return (
    <Card
      ref={cardRef}
      className='h-[24rem] drop-shadow-2xl sm:h-[48rem]'
      style={{
        backgroundImage: `radial-gradient(ellipse, rgba(248,248,18,0.1) 20%, hsl(var(--background)) 75%), url(${backgroundGrid.src})`
      }}
    >
      <CardContent className='h-full p-0 sm:flex sm:items-center sm:justify-center sm:py-10'>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            container: cardRef.current,
            align: 'center',
            containScroll: false,
            loop: true
          }}
          className='h-full w-full max-w-full sm:max-w-[90%]'
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          {children}
          <CarouselPrevious className='left-2.5 sm:-left-12' />
          <CarouselNext className='right-2.5 sm:-right-12' />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default FeaturedHighlightsCard;
