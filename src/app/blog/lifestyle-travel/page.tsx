// Component Imports
import BlogIntro from "@/components/blog/blog-intro/blog-intro";
import BlogList from "@/components/blog/blog-list/blog-list";

// Utils Imports
import { BlogIntroPropsModel } from "@/components/blog/blog-intro/models/blog-intro";

export default async function LifestyleTravelBlogPage() {
  // Constants
  const introData: BlogIntroPropsModel = {
    title: "Vagabond Vignettes",
    description: "Weaving timeless stories that echo the beauty of exploration. Join me on a journey of discovery, where each post paints a vivid picture of life's adventures.",
    clipPath: 'polygon(17.58% 42.15%, 27.79% 47.84%, 44.99% 43.52%, 29.45% 18.78%, 40.18% 20.24%, 55.76% 43.52%, 76.24% 39.03%, 86.7% 43.52%, 94.36% 51.57%, 86.83% 59.74%, 76.24% 62.78%, 55.17% 59.74%, 40.18% 80.42%, 29.45% 83.87%, 44.24% 57.66%, 27.79% 54.53%, 17.58% 60.5%, 20.19% 51.33%)'
  }

  return (
    <>
      {/* Wrapper */}
      <div className="lifestyle-travel-blog-page-wrapper">
        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          {/* Content */}
          <div className="flex flex-col">
            {/* SECTION: Hero Section */}
            <section id="hero" className="pt-12 sm:pt-20">
              <BlogIntro
                title={introData.title}
                description={introData.description}
                clipPath={introData.clipPath}
              />
            </section>

            {/* SECTION: Blog Content */}
            <section id="lifestyle-travel-blog-content">
              <BlogList />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}