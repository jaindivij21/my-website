// Component Imports
import HomeBackground from '@/components/home/home-background/home-background';
import TextTicker from '@/components/home/text-ticker/text-ticker';
import Newsletter from '@/components/home/newsletter/newsletter';
import WorksListingCard from '@/components/home/work-listing-card/work-listing-card';
import FeaturedHighlightsCard from '@/components/home/featured-highlights-card/featured-highlights-card';
import PersonalGalleryCard from '@/components/home/personal-gallery-card/personal-gallery-card';
import AuxillaryInfoCard from '@/components/home/auxillary-info-card/auxillary-info-card';
import FeaturedHighlightsCardContent from '@/components/home/featured-highlights-card/featured-highlights-card-content';
import Globe from '@/components/home/globe/globe';
import { HeroTitleSection } from '@/components/home/hero-title-section/hero-title-section';

export default function HomePage() {
  return (
    <>
      {/* Background Layer */}
      <HomeBackground className='absolute top-0' aria-hidden='true' />

      {/* Main Content Container */}
      <div className='relative mx-auto max-w-7xl overflow-hidden px-4'>
        <div className='flex flex-col gap-y-16 pt-20 2x-sm:pt-36 sm:pt-24 lg:gap-y-36 lg:pt-52'>
          {/* SECTION: Hero Section */}
          <section aria-label='Hero Section' className='flex flex-col'>
            {/* SUBSECTION: Hero Title Section */}
            <HeroTitleSection aria-label='Hero Title Section' />

            {/* SUBSECTION: Interactive Globe Visualization */}
            <Globe aria-label='Interactive Globe' />

            {/* SUBSECTION: Dynamic Text Ticker */}
            <TextTicker aria-label='Scrolling Text' />
          </section>

          {/* SECTION: Content Cards Section */}
          <section
            aria-label='Featured Content'
            className='flex flex-col gap-y-16'
          >
            {/* SUBSECTION: Featured Highlights */}
            <article aria-label='Featured Highlights'>
              <FeaturedHighlightsCard>
                <FeaturedHighlightsCardContent />
              </FeaturedHighlightsCard>
            </article>

            {/* SUBSECTION: Work Portfolio */}
            <article aria-label='Work Portfolio'>
              <WorksListingCard />
            </article>

            {/* SUBSECTION: Personal Gallery */}
            <article aria-label='Personal Gallery'>
              <PersonalGalleryCard />
            </article>

            {/* SUBSECTION: Additional Information */}
            <article aria-label='Additional Information'>
              <AuxillaryInfoCard />
            </article>
          </section>

          {/* SECTION: Newsletter Section */}
          <section aria-label='Newsletter Signup'>
            <Newsletter />
          </section>
        </div>
      </div>
    </>
  );
}
