// Essential Imports
import Image from 'next/image';

// Component Imports
import { Progress } from '../../shared/ui/building-blocks/progress';
import { Card, CardContent } from '../../shared/ui/building-blocks/card';
import CurrentTime from './current-time';

// Assets Imports
import { CloudRain } from 'lucide-react';

// Utils Imports
import { dayIcons, lifeIcons } from './constants/auxillary-info.constant';
import ProgressIcon from './progress-icon';

// Component: AuxillaryInfo
// Description: This component is used to display the auxillary information section on the home page including the local time, location and weather.
export const AuxillaryInfoCard = () => {
  const location = 'New Delhi, India';
  const now = new Date();

  // Function to calculate the % of day passed
  const calDayProgress = (): number => {
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);
    const secondsInADay = 24 * 60 * 60;
    const secondsPassed = (now.getTime() - startOfDay.getTime()) / 1000;

    return Math.round((secondsPassed / secondsInADay) * 100);
  };

  // Function to calculate the % of life passed
  const calLifeProgress = (): number => {
    const birthYear = 2000;
    const currentYear = new Date().getFullYear();
    const lifeExpectancy = 80;
    return Math.round(((currentYear - birthYear) / lifeExpectancy) * 100);
  };

  return (
    <Card
      className='overflow-hidden bg-[length:12px_12px]'
      style={{
        backgroundImage:
          'radial-gradient(circle at center, rgba(30, 30, 30, 0.8) 2px, transparent 0)'
      }}
    >
      <div
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,1) 75%)'
        }}
      >
        <div className='bg-brand-gradient'>
          <CardContent className='relative z-10 p-0 px-4 py-2 3x-sm:px-8 3x-sm:py-4 x-sm:px-4 x-sm:py-2 md:px-10 md:py-5 lg:px-20 lg:py-10'>
            {/* SECTION: Day Progress */}
            <div className='flex flex-col'>
              <div className='relative flex h-6 flex-row py-1 2x-sm:h-8 2x-sm:py-2 sm:h-12'>
                {dayIcons.map((icon, index) => {
                  return <ProgressIcon key={index} icon={icon} />;
                })}
              </div>
              <Progress
                value={calDayProgress()}
                className='h-1 cursor-pointer'
                innerClassName='bg-brand-primaryAccent drop-shadow-[0_-4px_10px_#F8F812]'
              />
            </div>

            {/* SECTION: Card */}
            <Card className='relative h-20 border-0 x-sm:h-24 lg:h-48'>
              {/* SUBSECTION: Background - World Map */}
              <Image
                alt='Card Background: An image of a world map.'
                src='https://res.cloudinary.com/dxeimkzxk/image/upload/t_Banner 16:9/v1741639908/world-map_pahii8.svg'
                fill
                style={{
                  objectFit: 'cover'
                }}
                quality={100}
                className='opacity-40'
              />

              {/* SUBSECTION: Content */}
              <div className='relative flex h-full flex-col items-center justify-center font-mono text-sm x-sm:text-lg lg:text-2xl'>
                <div className='flex items-center gap-x-4 font-light'>
                  <CloudRain size={16} />
                  <div>{location}</div>
                </div>

                <div>
                  <CurrentTime initialTime={now.getTime()} />
                </div>
              </div>
            </Card>

            {/* SECTION: Life Progress */}
            <div className='flex flex-col'>
              <Progress
                value={calLifeProgress()}
                className='h-1 cursor-pointer'
                innerClassName='bg-brand-primary drop-shadow-[0_4px_10px_#91FF3A]'
              />
              <div className='relative flex h-6 flex-row py-1 2x-sm:h-8 2x-sm:py-2 sm:h-12'>
                {lifeIcons.map((icon, index) => {
                  return <ProgressIcon key={index} icon={icon} />;
                })}
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default AuxillaryInfoCard;
