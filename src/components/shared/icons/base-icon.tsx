import { cn } from '@/lib/utils/common';
import { IconProps } from './types';

export const BaseIcon = ({
  children,
  className = '',
  color = 'currentColor',
  strokeWidth = 0.3,
  stroke = 'currentColor',
  fill = 'currentColor',
  viewBox = '0 0 24 24',
  width = '24',
  height = '24'
}: IconProps & { children: React.ReactNode }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox}
      width={width}
      height={height}
      className={cn(className)}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      color={color}
    >
      {children}
    </svg>
  );
};
