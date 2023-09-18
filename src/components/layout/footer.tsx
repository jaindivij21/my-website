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
    <footer className="mt-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col border-t-4 border-x-4 border-black rounded-t-lg shadow-[0_0_50px_0px_rgba(0,0,0,0.5)]	shadow-[#8fff3aba]">

          {/* SECTION: Pre-Footer */}
          <div className="flex justify-between h-56">
            {/* SUBSECTION: Social Links */}
            <div className="flex gap-6">
              <Image
                src={socialButterfly}
                alt="Social Butterfly"
                loading="lazy"
                className='w-54 self-end'
              />
              <SocialIconLinks />
            </div>

            {/* SUBSECTION: Twitter Box */}
            <div className="flex gap-6">
              <TwitterBox />
              <Image
                src={globalCitizen}
                alt="Global Citizen"
                loading="lazy"
                className='w-72 self-end'
              />
            </div>
          </div>

          {/* SECTION: Footer */}
          <div className="bg-brand-primary flex justify-between items-center h-20 px-16">
            <Logo color="black" />
            <div className="text-black font-normal">
              {`Made with 🖤 by Divij Jain. © ${currentYear} All rights reserved.`}
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}