// Component Imports
import { Card, CardContent } from "@/components/shared/ui/building-blocks/card";

// Utils Imports
import { BlogIntroPropsModel } from "./models/blog-intro";

// Component: BlogIntro
// Description: This component is used to display the intro section and title of the blog pages.
export const BlogIntro = ({ title, description, clipPath }: BlogIntroPropsModel) => {
  return (
    <Card className="h-2/5 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative isolate overflow-hidden bg-background p-5 sm:p-10">
          {/* Background */}
          <div className="absolute right-0 top-0 -z-10 blur" aria-hidden="true">
            <div
              className="aspect-video w-[12rem]	2x-sm:w-[16rem] sm:w-[24rem] bg-gradient-to-tr from-brand-primaryAccent to-brand-primary opacity-25"
              style={{
                clipPath: clipPath
              }}
            />
          </div>

          {/* Heading */}
          <h1 className='font-bold font-heading tracking-wide text-4xl 2x-sm:text-5xl sm:text-6xl mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-radial from-[#F0E703] to-[#B3DFA1]'>
              {title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xs 2x-sm:text-sm sm:text-xl">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BlogIntro;