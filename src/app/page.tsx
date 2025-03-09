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

export default function HomePage() {
  return <></>;
  // return (
  //   <main className="relative min-h-screen">
  //     {/* Background Layer */}
  //     <HomeBackground className="absolute top-0" aria-hidden="true" />

  //     {/* Main Content Container */}
  //     <div className="relative max-w-7xl mx-auto px-4 overflow-hidden">
  //       <div className="flex flex-col space-y-16 pt-20 2x-sm:pt-36 sm:pt-24 lg:pt-52">
  //         {/* SECTION: Hero Section */}
  //         <section
  //           aria-label="Hero Section"
  //           className="flex flex-col"
  //         >
  //           {/* SUBSECTION: Main Title */}
  //           <div className="cursor-none">
  //             <div className="flex flex-col items-center hover:scale-125 transition-transform duration-500">
  //               <div className="relative">
  //                 <h2 className="font-handwriting1 font-thin text-brand-primary text-3xl x-sm:text-4xl lg:text-6xl tracking-[.20em] opacity-90 transform translate-x-0.5 drop-shadow-[0_0_10px_rgba(248,248,18)]">
  //                   In Pursuit Of
  //                 </h2>
  //               </div>
  //               <h1 className="-mt-4 font-heading font-thin text-brand-foreground text-3xl x-sm:text-4xl lg:text-8xl transform xsm:text-5xl lg:-mt-8 drop-shadow-[2px_4px_10px_rgba(255,255,255,0.6)]">
  //                 Living The Adventure
  //               </h1>
  //             </div>
  //           </div>

  //           {/* SUBSECTION: Interactive Globe Visualization */}
  //           <div aria-label="Interactive Globe" role="img">
  //             <Globe />
  //           </div>

  //           {/* SUBSECTION: Dynamic Text Ticker */}
  //           <div aria-label="Scrolling Text">
  //             <TextTicker />
  //           </div>
  //         </section>

  //         {/* SECTION: Content Cards Section */}
  //         <section
  //           aria-label="Featured Content"
  //           className="flex flex-col gap-y-16"
  //         >
  //           {/* SUBSECTION: Featured Highlights */}
  //           <article aria-label="Featured Highlights">
  //             <FeaturedHighlightsCard>
  //               <FeaturedHighlightsCardContent />
  //             </FeaturedHighlightsCard>
  //           </article>

  //           {/* SUBSECTION: Work Portfolio */}
  //           <article aria-label="Work Portfolio">
  //             <WorksListingCard />
  //           </article>

  //           {/* SUBSECTION: Personal Gallery */}
  //           <article aria-label="Personal Gallery">
  //             <PersonalGalleryCard />
  //           </article>

  //           {/* SUBSECTION: Additional Information */}
  //           <article aria-label="Additional Information">
  //             <AuxillaryInfoCard />
  //           </article>
  //         </section>

  //         {/* SECTION: Newsletter Section */}
  //         <section aria-label="Newsletter Signup">
  //           <Newsletter />
  //         </section>
  //       </div>
  //     </div>
  //   </main>
  // );
}
