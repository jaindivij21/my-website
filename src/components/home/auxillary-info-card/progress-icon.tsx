"use client"

// Essential Imports
import { motion } from 'framer-motion'

// Component Imports
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shared/ui/building-blocks/tooltip'
import Icon from '@/components/shared/ui/building-blocks/icon'

// Utils Imports
import { ProgressIconModel } from './models/auxillary-info.model'
import { cn } from '@/lib/utils'
import useWindowSize from '@/lib/hooks/use-window-size'

const ProgressIcon = ({ icon }: { icon: ProgressIconModel }) => {
  const { isMobile } = useWindowSize();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className={cn("absolute cursor-pointer bg-white bg-opacity-10 shadow-lg shadow-rgba( 31, 38, 135, 0.3) rounded-md backdrop-blur-sm p-1 sm:p-2", icon.positionClass)}
            whileHover={{
              scale: 1.2,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: 'black'
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon name={icon.name} size={isMobile ? 10 : 16} />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{icon.alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider >
  )
}

export default ProgressIcon