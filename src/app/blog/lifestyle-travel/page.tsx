// Component Imports
import BlogIntro from "@/components/blog/blog-intro/blog-intro";
import BlogList from "@/components/blog/blog-list/blog-list";

// Utils Imports
import { BlogIntroPropsModel } from "@/components/blog/models/blog.model";

export default async function LifestyleTravelBlogPage() {
  // Constants
  const introData: BlogIntroPropsModel = {
    title: "Vagabond Vignettes",
    description: "Weaving timeless stories that echo the beauty of exploration. Join me on a journey of discovery, where each post paints a vivid picture of life's adventures.",
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