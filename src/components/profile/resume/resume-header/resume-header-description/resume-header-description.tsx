"use client"

// Utils Imports
import { Laptop, Mail, MapPin } from 'lucide-react';
import { ResumeHeaderData } from '../models/resume-header.model';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shared/ui/building-blocks/tooltip';

const ResumeHeaderDescription = ({ resumeHeaderData }: { resumeHeaderData: ResumeHeaderData }) => {
  function handleCopy() {
    navigator.clipboard.writeText('jaindivijwork@gmail.com');
  }

  return (
    <ul className='flex flex-row gap-x-6 gap-y-3 flex-wrap justify-center'>
      {resumeHeaderData.description.map((item, index) => (
        <li
          key={index}
          className={`flex flex-row items-center gap-x-2 text-sm text-gray-200 ${index == 2 ? 'cursor-pointer' : ''}`}
        >
          {index == 0 ? (
            <Laptop size={14} />
          ) : index == 1 ? (
            <MapPin size={14} />
          ) : index == 2 ? (
            <Mail size={14} />
          ) : null}

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
