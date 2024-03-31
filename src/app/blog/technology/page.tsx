// Component Imports
import BlogIntro from "@/components/blog/blog-intro/blog-intro";
import BlogList from "@/components/blog/blog-list/blog-list";

// Utils Imports
import { BlogIntroPropsModel } from "@/components/blog/models/blog.model";

export default async function TechnologyBlogPage() {
  // Constants
  const introData: BlogIntroPropsModel = {
    title: "Byte Ballet",
    description: "Where language of algorithms meets the choreography of code. From the waltz of data structures to the pirouettes of programming challenges.",
  }

  return (
    <>
      {/* Wrapper */}
      <div className="technology-blog-page-wrapper">
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
            <section id="technology-blog-content">
              <BlogList />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}