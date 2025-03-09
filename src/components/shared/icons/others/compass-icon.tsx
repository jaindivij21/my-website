import { BaseIcon } from '../base-icon';
import { IconProps } from '../types';

export default function CompassIcon(props: IconProps) {
  return (
    <BaseIcon
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z' />
      <circle cx='12' cy='12' r='10' />
    </BaseIcon>
  );
}
