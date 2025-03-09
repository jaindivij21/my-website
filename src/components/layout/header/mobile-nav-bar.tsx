'use client';

// Essential Imports
import { memo, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Component Imports
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from '@/components/shared/ui/building-blocks/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/shared/ui/building-blocks/accordion';
import { Logo } from '../../shared/icons';

// Utility Imports
import { Menu } from 'lucide-react';
import { navItems } from './constants/header.constant';
import HeaderSelection from '@/components/shared/icons/others/header-selection';

export const MobileNavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex sm:hidden'>
      <Sheet onOpenChange={handleMenuToggle}>
        <SheetTrigger aria-label='Open menu'>
          <Menu className='h-6 w-6' aria-hidden='true' />
        </SheetTrigger>

        <SheetContent title={'Navigation Menu'}>
          <SheetHeader className='mr-8'>
            <Link
              className='flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
              href='/'
              aria-label='Home'
            >
              <Logo color='white' className='mb-4 w-full' aria-hidden='true' />
              <p className='text-sm leading-tight text-muted-foreground'>
                digital alchemist, globetrotter, forever pursuing wisdom.
              </p>
            </Link>
          </SheetHeader>

          <MobileNavigationItems activeRoute={pathname} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

const MobileNavigationItems = memo(
  ({ activeRoute }: { activeRoute: string }) => (
    <Accordion type='single' collapsible className='mt-8 w-full'>
      {navItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          {item.hasSubmenu ? (
            <>
              <div className='relative'>
                {item.href === '/'
                  ? activeRoute === '/' && (
                      <HeaderSelection className='scale-80 -left-12' />
                    )
                  : activeRoute.startsWith(item.href) && (
                      <HeaderSelection className='scale-80 -left-12' />
                    )}
                <AccordionTrigger>{item.label}</AccordionTrigger>
              </div>
              <AccordionContent>
                <ul className='space-y-2'>
                  {item.items?.map((subItem, subIndex) => (
                    <li key={subIndex} className='relative'>
                      <Link
                        href={subItem.href}
                        className='block py-2 text-sm text-muted-foreground hover:text-foreground'
                      >
                        <div className='font-medium'>{subItem.title}</div>
                        <p className='text-xs text-muted-foreground/80'>
                          {subItem.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </>
          ) : (
            <div className='relative'>
              {item.href === '/'
                ? activeRoute === '/' && (
                    <HeaderSelection className='scale-80 -left-12' />
                  )
                : activeRoute.startsWith(item.href) && (
                    <HeaderSelection className='scale-80 -left-12' />
                  )}
              <Link
                href={item.href}
                className='flex items-center justify-between py-4 font-medium hover:underline'
              >
                {item.label}
              </Link>
            </div>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
);
MobileNavigationItems.displayName = 'MobileNavigationItems';
