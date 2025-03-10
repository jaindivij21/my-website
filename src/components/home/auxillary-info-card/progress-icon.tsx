'use client';

// Essential Imports
import { motion } from 'motion/react';

// Component Imports
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/shared/ui/building-blocks/tooltip';

// Utils Imports
import { ProgressIconModel } from './models/auxillary-info.model';
import { cn } from '@/lib/utils/common';
import { useIsMobile } from '@/lib/hooks/use-mobile';

const ProgressIcon = ({ icon }: { icon: ProgressIconModel }) => {
  const isMobile = useIsMobile();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className={cn(
              'shadow-rgba( 31, 38, 135, 0.3) absolute cursor-pointer rounded-md bg-white bg-opacity-10 p-1 shadow-lg backdrop-blur-sm sm:p-2',
              icon.positionClass
            )}
            whileHover={{
              scale: 1.2,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: 'black'
            }}
            transition={{ duration: 0.5 }}
          >
            {/* <Icon name={icon.name} size={isMobile ? 10 : 16} /> */}
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{icon.alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProgressIcon;
