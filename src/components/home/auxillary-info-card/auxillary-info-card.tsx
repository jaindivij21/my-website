// Essential Imports
import Image from 'next/image'

// Component Imports
import { Progress } from '../../shared/ui/building-blocks/progress'
import { Card, CardContent } from "../../shared/ui/building-blocks/card"
import CurrentTime from './current-time'

// Assets Imports
import worldMap from '../../../../public/images/world-map.svg'
import { CloudRain } from "lucide-react"

// Utils Imports
import { dayIcons, lifeIcons } from './constants/auxillary-info.constant'
import ProgressIcon from './progress-icon'

// Component: AuxillaryInfo
// Description: This component is used to display the auxillary information section on the home page including the local time, location and weather.
export const AuxillaryInfoCard = () => {
  const location = "New Delhi, India"
  const now = new Date();

  // Function to calculate the % of day passed
  const calDayProgress = (): number => {
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);
    const secondsInADay = 24 * 60 * 60;
    const secondsPassed = (now.getTime() - startOfDay.getTime()) / 1000;

    return Math.round((secondsPassed / secondsInADay) * 100);
  }

  // Function to calculate the % of life passed
  const calLifeProgress = (): number => {
    const birthYear = 2000;
    const currentYear = new Date().getFullYear();
    const lifeExpectancy = 80;
    return Math.round(((currentYear - birthYear) / lifeExpectancy) * 100);
  }

  return (
    <Card
      className='overflow-hidden bg-[length:12px_12px]'
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(30, 30, 30, 0.8) 2px, transparent 0)",
      }}
    >
      <div
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,1) 75%)'
        }}
      >
        <div className='bg-brand-gradient'>
          <CardContent
            className='relative z-10 p-0 py-2 px-4 3x-sm:py-4 3x-sm:px-8 x-sm:py-2 x-sm:px-4 md:py-5 md:px-10 lg:py-10 lg:px-20'
          >
            {/* SECTION: Day Progress */}
            <div className='flex flex-col'>
              <div className='flex flex-row relative h-6 2x-sm:h-8 sm:h-12 py-1 2x-sm:py-2'>
                {
                  dayIcons.map((icon, index) => {
                    return <ProgressIcon key={index} icon={icon} />
                  })
                }
              </div>
              <Progress
                value={calDayProgress()}
                className='cursor-pointer h-1'
                innerClassName='bg-brand-primaryAccent drop-shadow-[0_-4px_10px_#F8F812]'
              />
            </div>

            {/* SECTION: Card */}
            <Card
              className="h-20 x-sm:h-24 lg:h-48 border-0 relative"
            >
              {/* SUBSECTION: Background - World Map */}
              <Image
                alt="Card Background: An image of a world map."
                src={worldMap}
                fill
                style={{
                  objectFit: "cover",
                }}
                quality={100}
                className='opacity-40'
              />

              {/* SUBSECTION: Content */}
              <div className='flex flex-col items-center justify-center h-full font-mono text-sm x-sm:text-lg lg:text-2xl'>
                <div className='flex items-center gap-x-4 font-light'>
                  <CloudRain size={16} />
                  <div>
                    {location}
                  </div>
                </div>

                <div>
                  <CurrentTime
                    initialTime={now.getTime()}
                  />
                </div>
              </div>
            </Card>

            {/* SECTION: Life Progress */}
            <div className='flex flex-col'>
              <Progress
                value={calLifeProgress()}
                className='cursor-pointer h-1'
                innerClassName='bg-brand-primary drop-shadow-[0_4px_10px_#91FF3A]'
              />
              <div
                className='flex flex-row relative h-6 2x-sm:h-8 sm:h-12 py-1 2x-sm:py-2'>
                {
                  lifeIcons.map((icon, index) => {
                    return <ProgressIcon key={index} icon={icon} />
                  })
                }
              </div>
            </div>
          </CardContent>
        </div>
      </div >
    </Card >
  )
}

export default AuxillaryInfoCard