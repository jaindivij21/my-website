// Essential Imports
import Image from 'next/image';

// Component Imports
import TwitterBox from './twitter-box';

// Assets Imports
import socialButterfly from '../../../public/svg/social-butterfly.svg';
import globalCitizen from '../../../public/svg/global-citizen.svg';
import SocialIconLinks from './social-icon-links';
import { Logo } from '../shared/icons';

// Component: Footer
// Description: Footer for the website, which includes the footer content and links to social media.
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='mt-20'>
      {/* Container */}
      <div className='mx-auto max-w-7xl'>
        {/* Footer Content */}
        <div className='flex flex-col rounded-t-lg border-x-4 border-t-4 border-black shadow-[0_0_50px_0px_rgba(0,0,0,0.5)] shadow-[#8fff3aba]'>
          {/* SECTION: Pre-Footer */}
          <div className='flex flex-col justify-between lg:h-56 lg:flex-row'>
            {/* SUBSECTION: Social Links */}
            <div className='lg:items-normal flex justify-around gap-4 p-4 sm:p-6 md:items-center lg:justify-normal lg:gap-6 lg:p-0'>
              <Image
                src={socialButterfly}
                alt='Social Butterfly'
                loading='lazy'
                className='lg:w-54 w-32 self-start sm:w-44 lg:self-end'
              />
              <SocialIconLinks />
            </div>

            {/* SUBSECTION: Twitter Box */}
            <div className='flex basis-1/2 justify-around gap-4 overflow-hidden px-4 sm:px-6 lg:justify-normal lg:gap-6 lg:overflow-auto lg:p-0'>
              <TwitterBox />
              <Image
                src={globalCitizen}
                alt='Global Citizen'
                loading='lazy'
                className='-mr-8 w-48 self-end 2x-sm:-mr-6 x-sm:mr-0 sm:w-56 md:w-64 lg:-mr-4 lg:w-72 xl:mr-0'
              />
            </div>
          </div>

          {/* SECTION: Footer */}
          <div className='flex h-16 items-center justify-around gap-4 bg-brand-primary px-4 text-center lg:h-20 lg:justify-between lg:gap-0 lg:px-16'>
            <Logo color='black' />
            <div className='text-sm font-medium text-black lg:font-normal'>
              {`Made with 🖤 by Divij Jain. © ${currentYear} All rights reserved.`}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
