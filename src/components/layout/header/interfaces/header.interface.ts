import { ComponentType } from 'react';

export type IconName =
  | 'compass'
  | 'binary'
  | 'award'
  | 'venetian-mask'
  | 'at-sign';

export interface SubHeading {
  title: string;
  href: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}
