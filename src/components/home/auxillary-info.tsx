// Essential Imports
import Image from 'next/image'

// Component Imports
import { Progress } from '../shared/ui/building-blocks/progress'
import { Card } from "../shared/ui/building-blocks/card"
import CurrentTime from './current-time'

// Assets Imports
import worldMap from '../../../public/images/world-map.svg'
import { CloudRain } from "lucide-react"

// Component: AuxillaryInfo
// Description: This component is used to display the auxillary information section on the home page including the local time, location and weather.
export const AuxillaryInfo = () => {
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
    <div>
      {/* SECTION: Day Progress */}
      <Progress
        value={calDayProgress()}
        className='cursor-pointer h-1'
        innerClassName='bg-brand-primaryAccent drop-shadow-[0_-4px_10px_#F8F812]'
      />

      {/* SECTION: Card */}
      <Card
        className="h-24 lg:h-48 border-0 relative"
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
        <div className='flex flex-col items-center justify-center h-full font-mono'>
          <div className='flex items-center gap-x-4 font-light text-3xl'>
            <CloudRain />
            <div>
              {location}
            </div>
          </div>

          <div>
            <CurrentTime
              initialTime={now.getTime()}
              className='text-2xl'
            />
          </div>
        </div>
      </Card>

      {/* SECTION: Life Progress */}
      <Progress
        value={calLifeProgress()}
        className='cursor-pointer h-1'
        innerClassName='bg-brand-primary drop-shadow-[0_4px_10px_#91FF3A]'
      />
    </div>
  )
}

export default AuxillaryInfo