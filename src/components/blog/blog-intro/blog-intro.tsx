// Component Imports
import { Card, CardContent } from "@/components/shared/ui/building-blocks/card";

// Utils Imports
import { BlogIntroPropsModel } from "../models/blog.model";

// Component: BlogIntro
// Description: This component is used to display the intro section and title of the blog pages.
export const BlogIntro = ({ title, description, clipPath, ifUseClipPath = false }: BlogIntroPropsModel) => {
  const mask = 'url(https://lh3.googleusercontent.com/pw/AP1GczNDbpv4kk_5xzRevG-L6MKIgYvNRJKfQ6BfDL4GqWOItlpGpOxRbaYEj1oYIeZz9bbE2VUGZLLTd4Q5jX9nbaagchsGCyC9l3mB4HOEwYBV1vcxQFP2zltAEOqWCGj-6odVpAfFA6twSln-NQqEoNX7Iw=w1024-h768-s-no-gm)';

  return (
    <Card className="h-2/5 overflow-hidden rounded-xl border-0">
      <CardContent className="p-0">
        {ifUseClipPath ? (
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

            <BlogIntroContent title={title} description={description} />
          </div>
        ) : (
          <div className="relative isolate overflow-hidden p-5 sm:p-10">
            {/* Background */}
            <div
              className="absolute top-0 left-0 h-full w-full -z-10 bg-gradient-to-tr from-brand-primaryAccent to-brand-primary opacity-25 blur" aria-hidden="true"
              style={{
                WebkitMaskImage: mask,
                maskImage: mask,
              }}
            />

            <BlogIntroContent title={title} description={description} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

const BlogIntroContent = ({ title, description }: BlogIntroPropsModel) => {
  return (
    <>
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
    </>
  )
}

export default BlogIntro;