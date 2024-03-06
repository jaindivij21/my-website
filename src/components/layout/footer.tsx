// Essential Imports
import Image from 'next/image'

// Component Imports
import TwitterBox from './twitter-box'

// Assets Imports
import socialButterfly from '../../../public/svg/social-butterfly.svg'
import globalCitizen from '../../../public/svg/global-citizen.svg'
import SocialIconLinks from './social-icon-links'
import { Logo } from "../shared/icons"

// Component: Footer
// Description: Footer for the website, which includes the footer content and links to social media.
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="mt-20">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col border-t-4 border-x-4 border-black rounded-t-lg shadow-[0_0_50px_0px_rgba(0,0,0,0.5)]	shadow-[#8fff3aba]">

          {/* SECTION: Pre-Footer */}
          <div className="flex flex-col lg:flex-row justify-between lg:h-56">
            {/* SUBSECTION: Social Links */}
            <div className="p-4 sm:p-6 lg:p-0 flex justify-around lg:justify-normal md:items-center lg:items-normal gap-4 lg:gap-6">
              <Image
                src={socialButterfly}
                alt="Social Butterfly"
                loading="lazy"
                className='w-32 sm:w-44 lg:w-54 self-start lg:self-end'
              />
              <SocialIconLinks />
            </div>

            {/* SUBSECTION: Twitter Box */}
            <div className="overflow-hidden lg:overflow-auto px-4 sm:px-6 lg:p-0 basis-1/2 flex justify-around lg:justify-normal gap-4 lg:gap-6">
              <TwitterBox />
              <Image
                src={globalCitizen}
                alt="Global Citizen"
                loading="lazy"
                className='-mr-8 2x-sm:-mr-6 x-sm:mr-0 lg:-mr-4 xl:mr-0 w-48 sm:w-56 md:w-64 lg:w-72 self-end'
              />
            </div>
          </div>

          {/* SECTION: Footer */}
          <div className="bg-brand-primary text-center h-16 lg:h-20 flex gap-4 lg:gap-0 justify-around items-center lg:justify-between px-4 lg:px-16">
            <Logo color="black" />
            <div className="text-black text-sm font-medium lg:font-normal">
              {`Made with 🖤 by Divij Jain. © ${currentYear} All rights reserved.`}
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}