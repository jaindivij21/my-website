// Component Imports
import HomeBackground from "@/components/home/home-background";
import Globe from "@/components/home/globe";
import TextTicker from "@/components/home/text-ticker";

export default async function HomePage() {
  return (
    <>
      {/* Background Image */}
      <HomeBackground className="absolute top-0" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">

        {/* Content */}
        <div className="pt-28 2x-sm:pt-36 sm:pt-24 lg:pt-52">

          {/* SECTION: Header & Globe */}
          <div className="flex flex-col">

            {/* SUBSECTION: Main Page Title */}
            <section id="title" className="cursor-none">
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
            </section>

            {/* SUBSECTION: Globe */}
            <section id="globe">
              <Globe />
            </section>

            {/* SUBSECTION: Ticker */}
            <section id="ticker">
              <TextTicker />
            </section>

            <section>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}