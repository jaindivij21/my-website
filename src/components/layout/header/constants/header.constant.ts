// Utility Imports
import { SubHeading } from '../interfaces/header.interface';
import {
  AwardIcon,
  AtSignIcon,
  BinaryIcon,
  CompassIcon,
  VenetianMaskIcon
} from '@/components/shared/icons';

const BLOG_SUBHEADINGS: SubHeading[] = [
  {
    title: 'Lifestyle and Travel',
    href: '/blog/lifestyle-travel',
    description: "Globetrotting to curate life's gallery.",
    icon: CompassIcon
  },
  {
    title: 'Technology',
    href: '/blog/technology',
    description: 'Navigating the digital frontier.',
    icon: BinaryIcon
  }
];

const ABOUT_SUBHEADINGS: SubHeading[] = [
  {
    title: 'Resume',
    href: '/profile/resume',
    description: 'Portfolio showcasing my professional journey.',
    icon: AwardIcon
  },
  {
    title: 'About Me',
    href: '/profile/me',
    description: 'A little bit about me.',
    icon: VenetianMaskIcon
  },
  {
    title: 'Contact Me',
    href: '/profile/about-me#contact',
    description: 'Get in touch.',
    icon: AtSignIcon
  }
];

export const navItems = [
  { href: '/', label: 'Home', hasSubmenu: false },
  { href: '/blog', label: 'Blog', hasSubmenu: true, items: BLOG_SUBHEADINGS },
  { href: '/content', label: 'Content', hasSubmenu: false },
  { href: '/shop', label: 'Shop', hasSubmenu: false },
  {
    href: '/profile',
    label: 'About',
    hasSubmenu: true,
    items: ABOUT_SUBHEADINGS
  }
];
