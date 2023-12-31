// Component Imports
import HomeBackground from "@/components/home/home-background";
import Globe from "@/components/home/globe";
import TextTicker from "@/components/home/text-ticker";
import AuxillaryInfo from "@/components/home/auxillary-info";
import PersonalGalleryCard from "@/components/home/personal-gallery-card";

export default async function HomePage() {
  return (
    <>
      {/* Background Image */}
      <HomeBackground className="absolute top-0" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Content */}
        <div className="flex flex-col space-y-20 pt-20 2x-sm:pt-36 sm:pt-24 lg:pt-52">

          {/* SECTION: Header, Globe and Ticker */}
          <section id="hero" className="flex flex-col">

            {/* SUBSECTION: Main Page Title */}
            <div id="title" className="cursor-none">
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-500">
                <div className="relative">
                  <h2 className="absolute font-handwriting1 font-thin text-brand-primaryAccent text-3xl md:text-4xl lg:text-6xl tracking-[.20em] opacity-50 blur-[3px]">
                    In Pursuit Of
                  </h2>
                  <h2 className="font-handwriting1 font-thin text-brand-primary text-3xl md:text-4xl lg:text-6xl tracking-[.20em] opacity-90 transform translate-x-0.5">
                    In Pursuit Of
                  </h2>
                </div>
                <h1 className="-mt-4 font-heading font-thin text-brand-foreground text-3xl md:text-4xl lg:text-8xl transform xsm:text-5xl lg:-mt-8">
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

          {/* SECTION: Auxillary Information Section */}
          <section id="auxillary-info">
            <AuxillaryInfo />
          </section>

          {/* SECTION: Cards */}
          <section id="cards">
            <div id="featured-blog-card">
            </div>
            <div id="featured-shop-card">
            </div>
            <div id="about-me-card">
              <PersonalGalleryCard />
            </div>
          </section>

          {/* SECTION: Newsletter */}
          <section id="newsletter">
          </section>
        </div>
      </div>
    </>
  );
}