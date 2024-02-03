// Component Imports
import HomeBackground from "@/components/home/home-background";
import Globe from "@/components/home/globe";
import TextTicker from "@/components/home/text-ticker";
import Newsletter from "@/components/home/newsletter/newsletter";
import WorksListingCard from "@/components/home/work-listing-card/work-listing-card";
import FeaturedHighlightsCard from "@/components/home/featured-highlights-card/featured-highlights-card";
import PersonalGalleryCard from "@/components/home/personal-gallery-card/personal-gallery-card";
import AuxillaryInfoCard from "@/components/home/auxillary-info-card/auxillary-info-card";

export default async function HomePage() {
  return (
    <>
      {/* Background Image */}
      <HomeBackground className="absolute top-0" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">

        {/* Content */}
        <div className="flex flex-col space-y-16 pt-20 2x-sm:pt-36 sm:pt-24 lg:pt-52">

          {/* SECTION: Header, Globe and Ticker */}
          <section id="hero" className="flex flex-col">

            {/* SUBSECTION: Main Page Title */}
            <div id="title" className="cursor-none">
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-500">
                <div className="relative">
                  <h2 className="font-handwriting1 font-thin text-brand-primary text-3xl x-sm:text-4xl lg:text-6xl tracking-[.20em] opacity-90 transform translate-x-0.5 drop-shadow-[0_0_10px_rgba(248,248,18)]">
                    In Pursuit Of
                  </h2>
                </div>
                <h1 className="-mt-4 font-heading font-thin text-brand-foreground text-3xl x-sm:text-4xl lg:text-8xl transform xsm:text-5xl lg:-mt-8 drop-shadow-[2px_4px_10px_rgba(255,255,255,0.6)]">
                  Living The Adventure
                </h1>
              </div>
            </div>

            {/* SUBSECTION: Globe */}
            <div id="globe">
              <Globe />
            </div>

            {/* SUBSECTION: Ticker */}
            <div id="ticker">
              <TextTicker />
            </div>

          </section>

          {/* SECTION: Cards */}
          <section id="cards" className="flex flex-col gap-y-16">

            {/* SUBSECTION: Featured Highlights Section */}
            <div id="featured-highlights-card">
              <FeaturedHighlightsCard />
            </div>

            {/* SUBSECTION: Work Gallery Card */}
            <div id="work-listing-card">
              <WorksListingCard />
            </div>

            {/* SUBSECTION: Personal Gallery Card */}
            <div id="about-me-card">
              <PersonalGalleryCard />
            </div>

            {/* SUBSECTION: Auxillary Information Section */}
            <div id="auxillary-info">
              <AuxillaryInfoCard />
            </div>

          </section>

          {/* SECTION: Newsletter */}
          <section id="newsletter">
            <Newsletter />
          </section>
        </div>
      </div>
    </>
  );
}