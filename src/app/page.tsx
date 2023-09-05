import Globe from "@/components/home/globe";
import HomeBackground from "@/components/home/home-background";

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
          <div className="flex flex-col space-y-10">

            {/* SUBSECTION: Main Page Title */}
            <section className="cursor-none">
              <div className="flex flex-col items-center hover:scale-125 ease-in-out duration-500">
                <div className="relative">
                  <h2 className="absolute font-handwriting1 font-thin text-brand-primaryAccent text-3xl tracking-[.20em] opacity-50 blur-[3px] md:text-4xl lg:text-6xl">
                    In Pursuit Of
                  </h2>
                  <h2 className="font-handwriting1 font-thin text-brand-primary text-3xl tracking-[.20em] translate-x-0.5 opacity-90 md:text-4xl lg:text-6xl">
                    In Pursuit Of
                  </h2>
                </div>
                <h1 className="-mt-4 font-heading font-thin text-brand-foreground text-3xl 3x-sm:text-4xl x-sm:text-5xl md:text-6xl lg:text-8xl lg:-mt-8">Living The Adventure</h1>
              </div>
            </section>

            {/* SUBSECTION: Globe */}
            <section>
              <Globe />
            </section>

          </div>
        </div>
      </div>
    </>
  );
}