// Essential Imports
import Image from 'next/image'

// Component Imports
import { Badge } from "@/components/shared/ui/building-blocks/badge"
import ResumeHeaderDescription from './resume-header-description/resume-header-description';

// Utils Imports
import { resumeHeaderData } from './constants/resume-header.constant';

const ResumeHeader = () => {
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Content */}
          <div className="h-full flex flex-row gap-x-6 items-end">
            {/* SECTION: Resume Image */}
            <Image
              src={resumeHeaderData.image.src}
              alt={resumeHeaderData.image.alt}
              width={150}
              height={150}
              className='object-cover rounded-full relative top-9'
            />

            {/* SECTION: Personal Details */}
            <div className='flex flex-col gap-y-3 mb-4'>
              {/* SUBSECTION: Name and Tagline */}
              <div className='flex flex-col gap-y-1'>
                <div className='flex flex-row items-center gap-x-3'>
                  <h1 className="font-heading text-4xl font-bold">Divij Jain</h1>
                  <Badge className='text-gray-300' variant="secondary">He/Him</Badge>
                </div>

                <p className='text-sm font-light tracking-wide text-gray-200'>
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