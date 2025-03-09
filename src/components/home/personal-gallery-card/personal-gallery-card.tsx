// Component Imports
import {
  Card,
  CardContent,
  CardHeader
} from '../../shared/ui/building-blocks/card';
import TypewriterText from '../../shared/ui/generic/typewriter-text/typewriter-text';
import InfiniteGallery from './infinite-gallery';

// Component: Personal Gallery Card
// Description: This component is an displays my photos and a small description of my life.
export const PersonalGalleryCard = () => {
  return (
    <Card className='h-[32rem] overflow-hidden drop-shadow-2xl will-change-transform'>
      <CardHeader className='absolute left-1/2 z-10 flex h-full w-full -translate-x-1/2 transform justify-center text-center font-handwriting1 text-4xl font-bold text-brand-text 2x-sm:text-5xl md:text-6xl lg:text-8xl'>
        <TypewriterText
          sequence={[
            "Divij's Visual Odyssey..",
            2000,
            'Welcome Onboard!',
            1000
          ]}
        />
      </CardHeader>
      <CardContent className='p-10'>
        <InfiniteGallery />
      </CardContent>
    </Card>
  );
};

export default PersonalGalleryCard;
