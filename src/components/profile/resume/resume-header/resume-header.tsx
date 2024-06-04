"use client"

// Essential Imports
import Image from 'next/image'

// Component Imports
import { Badge } from "@/components/shared/ui/building-blocks/badge"
import ResumeHeaderDescription from './resume-header-description/resume-header-description';

// Utils Imports
import { resumeHeaderData } from './constants/resume-header.constant';
import useWindowSize from '@/lib/hooks/use-window-size';

const ResumeHeader = () => {
  const { isMobile } = useWindowSize();
  console.log("Component is being rendered");

  return (
    <>
      {/* Wrapper */}
      <div
        className="resume-header-wrapper border-b border-muted/50 min-h-60 h-min flex"
        style={{
          background: 'repeating-linear-gradient(-45deg, hsla(240, 3.7%, 15.9%, 0.5), hsla(240, 3.7%, 15.9%, 0.5) 2.5px, hsl(var(--black)) 2.5px, hsl(var(--black)) 10px)'
        }}
      >
        {/* Container */}
        <div className="max-w-7xl mx-auto px-6 py-10 sm:px-4 sm:py-0">
          {/* Content */}
          <div className="h-full flex flex-col gap-6 items-center sm:flex-row sm:items-end">
            {/* SECTION: Resume Image */}
            <Image
              src={resumeHeaderData.image.src}
              alt={resumeHeaderData.image.alt}
              width={isMobile ? 88 : 150}
              height={isMobile ? 88 : 150}
              priority={true}
              className='object-cover rounded-full sm:relative sm:top-9'
            />

            {/* SECTION: Personal Details */}
            <div className='mb-0 flex flex-col gap-y-6 items-center sm:items-start sm:mb-4 sm:gap-y-3'>
              {/* SUBSECTION: Name and Tagline */}
              <div className='flex flex-col items-center sm:items-start gap-y-2 sm:gap-y-1'>
                <div className='flex flex-row items-center gap-x-3'>
                  <h1 className="font-heading text-4xl font-bold">Divij Jain</h1>
                  <Badge className='text-gray-300' variant="secondary">He/Him</Badge>
                </div>

                <p className='text-sm font-light tracking-wide text-gray-200 text-center'>
                  {resumeHeaderData.tagline}
                </p>
              </div>

              {/* SUBSECTION: Description */}
              <ResumeHeaderDescription
                resumeHeaderData={resumeHeaderData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeHeader;