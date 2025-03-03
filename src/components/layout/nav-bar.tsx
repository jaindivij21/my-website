'use client';

// Essential Imports
import * as React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

// Component Imports
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  HeaderNavigationMenuTriggerStyle,
  HeaderNavigationMenuTriggerMobileStyle
} from '@/components/shared/ui/building-blocks/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose
} from '@/components/shared/ui/building-blocks/sheet';
import HeaderSelection from '../shared/icons/header-selection';
import Icon from '../shared/ui/building-blocks/icon';
import { Logo } from '../shared/icons';

// Utility Imports
import { cn } from '@/lib/utils/common';

// NavBar Component
// The navigation bar component for the website.
export const NavBar = () => {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState<string>(pathname);

  useEffect(() => {
    // Fetches the pathname and sets the active route for the header selection graphic.
    setActiveRoute(pathname);
  }, [pathname]);

  // Blog Subheadings
  const blogSubheadings: {
    title: string;
    href: string;
    description: string;
    iconName: string;
  }[] = [
    {
      title: 'Lifestyle and Travel',
      href: '/blog/lifestyle-travel',
      description: "Globetrotting to curate life's gallery.",
      iconName: 'compass'
    },
    {
      title: 'Technology',
      href: '/blog/technology',
      description: 'Navigating the digital frontier.',
      iconName: 'binary'
    }
  ];

  // About Subheadings
  const aboutSubheadings: {
    title: string;
    href: string;
    description: string;
    iconName: string;
  }[] = [
    {
      title: 'Resume',
      href: '/profile/resume',
      description: 'Portfolio showcasing my professional journey.',
      iconName: 'award'
    },
    {
      title: 'About Me',
      href: '/profile/me',
      description: 'A little bit about me.',
      iconName: 'venetian-mask'
    },
    {
      title: 'Contact Me',
      href: '/profile/about-me#contact',
      description: 'Get in touch.',
      iconName: 'at-sign'
    }
  ];

  return (
    <>
      {/* Mobile */}
      <>
        <div className='flex sm:hidden'>
          <Sheet>
            {/* SECTION: Trigger Button */}
            <SheetTrigger>
              <Menu />
            </SheetTrigger>

            {/* SECTION: Sheet Content */}
            <SheetContent>
              {/* SUBSECTION: Sheet Content Header */}
              <SheetHeader className='mr-8'>
                <Link
                  className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                  href='/'
                >
                  <Logo color='white' className='w-full' />
                  <div className='mb-2 mt-4 text-lg font-medium'>
                    Divij Jain
                  </div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    digital alchemist, globetrotter, forever pursuing wisdom.
                  </p>
                </Link>
              </SheetHeader>

              {/* SUBSECTION: Sheet Content Menus */}
              <NavigationMenu
                orientation='vertical'
                className='mt-8 max-w-none justify-start'
                outerViewportClassName='top-0 right-0 justify-end'
                viewportClassName='w-3/5'
              >
                <NavigationMenuList className='flex-col items-start space-y-4'>
                  {/* Home */}
                  <SheetClose asChild>
                    <NavigationMenuItem className='relative'>
                      {activeRoute === '/' && (
                        <HeaderSelection className='scale-110' />
                      )}
                      <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink
                          className={HeaderNavigationMenuTriggerMobileStyle()}
                        >
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </SheetClose>

                  {/* Blog */}
                  <NavigationMenuItem className='relative'>
                    {activeRoute.startsWith('/blog') && (
                      <HeaderSelection className='scale-110' />
                    )}
                    <NavigationMenuTrigger
                      className={HeaderNavigationMenuTriggerMobileStyle()}
                    >
                      Blog
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid gap-3 p-1'>
                        {blogSubheadings.map((subheading) => (
                          <ListItem
                            key={subheading.title}
                            title={subheading.title}
                            href={subheading.href}
                            icon={subheading.iconName}
                          >
                            {subheading.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Content */}
                  <NavigationMenuItem className='relative'>
                    {activeRoute.startsWith('/content') && (
                      <HeaderSelection className='scale-110' />
                    )}
                    <Link href='/content' legacyBehavior passHref>
                      <NavigationMenuLink
                        className={HeaderNavigationMenuTriggerMobileStyle()}
                      >
                        Content
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Shop */}
                  <NavigationMenuItem className='relative'>
                    {activeRoute.startsWith('/shop') && (
                      <HeaderSelection className='scale-110' />
                    )}
                    <Link href='/shop' legacyBehavior passHref>
                      <NavigationMenuLink
                        className={HeaderNavigationMenuTriggerMobileStyle()}
                      >
                        Shop
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* About */}
                  <NavigationMenuItem className='relative'>
                    {activeRoute.startsWith('/profile') && (
                      <HeaderSelection className='scale-110' />
                    )}
                    <NavigationMenuTrigger
                      className={HeaderNavigationMenuTriggerMobileStyle()}
                    >
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid gap-3 p-1'>
                        {aboutSubheadings.map((subheading) => (
                          <ListItem
                            key={subheading.title}
                            title={subheading.title}
                            href={subheading.href}
                            icon={subheading.iconName}
                          >
                            {subheading.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </>

      {/* Desktop */}
      <>
        {/* SECTION: Desktop Navigation Menu */}
        <NavigationMenu className='hidden sm:block'>
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem className='relative'>
              {activeRoute === '/' && <HeaderSelection />}
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink
                  className={HeaderNavigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Blog */}
            <NavigationMenuItem className='relative'>
              {activeRoute.startsWith('/blog') && <HeaderSelection />}
              <NavigationMenuTrigger
                className={HeaderNavigationMenuTriggerStyle()}
              >
                Blog
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {blogSubheadings.map((subheading) => (
                    <ListItem
                      key={subheading.title}
                      title={subheading.title}
                      href={subheading.href}
                      icon={subheading.iconName}
                    >
                      {subheading.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Content */}
            <NavigationMenuItem className='relative'>
              {activeRoute.startsWith('/content') && <HeaderSelection />}
              <Link href='/content' legacyBehavior passHref>
                <NavigationMenuLink
                  className={HeaderNavigationMenuTriggerStyle()}
                >
                  Content
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Shop */}
            <NavigationMenuItem className='relative'>
              {activeRoute.startsWith('/shop') && <HeaderSelection />}
              <Link href='/shop' legacyBehavior passHref>
                <NavigationMenuLink
                  className={HeaderNavigationMenuTriggerStyle()}
                >
                  Shop
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem className='relative'>
              {activeRoute.startsWith('/profile') && <HeaderSelection />}
              <NavigationMenuTrigger
                className={HeaderNavigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <Link
                        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                        href='/'
                      >
                        <Logo color='white' className='w-full' />
                        <div className='mb-2 mt-4 text-lg font-medium'>
                          Divij Jain
                        </div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          digital alchemist, globetrotter, forever pursuing
                          wisdom.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {aboutSubheadings.map((subheading) => (
                    <ListItem
                      key={subheading.title}
                      title={subheading.title}
                      href={subheading.href}
                      icon={subheading.iconName}
                    >
                      {subheading.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </>
    </>
  );
};

// Helper Component for the submenus in the navigation bar.
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: any }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='flex items-center space-x-2'>
            <Icon name={icon} size={16} />
            <div className='text-sm font-medium leading-none'>{title}</div>
          </div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
