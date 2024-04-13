"use client"

// Component Imports
import Icon from '@/components/shared/ui/building-blocks/icon'

// Utils Imports
import { ResumeHeaderData } from '../models/resume-header.model';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shared/ui/building-blocks/tooltip';

const ResumeHeaderDescription = ({ resumeHeaderData }: { resumeHeaderData: ResumeHeaderData }) => {
  function handleCopy() {
    navigator.clipboard.writeText('jaindivijwork@gmail.com');
  }

  return (
    <ul className='flex flex-row gap-x-6'>
      {resumeHeaderData.description.map((item, index) => (
        <li
          key={index}
          className={`flex flex-row items-center gap-x-2 text-sm text-gray-200 ${index == 2 ? 'cursor-pointer' : ''}`}
        >
          <Icon name={item.icon} size={14} />
          {index == 2 ? (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span onClick={() => handleCopy()}>
                    {item.text}
                  </span>
                </TooltipTrigger>
                <TooltipContent side='bottom'>
                  <p>Click To Copy!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider >
          ) : (
            <span>{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ResumeHeaderDescription;
