import { BaseIcon } from '../base-icon';
import { IconProps } from '../types';

export default function AtSignIcon(props: IconProps) {
  return (
    <BaseIcon
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <circle cx='12' cy='12' r='4' />
      <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' />
    </BaseIcon>
  );
}
