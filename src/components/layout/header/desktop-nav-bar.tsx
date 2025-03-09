'use client';

// Essential Imports
import { memo, forwardRef, ComponentPropsWithoutRef } from 'react';

// Component Imports
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyles
} from '@/components/shared/ui/building-blocks/navigation-menu';

// Utility Imports
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/common';
import { navItems } from './constants/header.constant';
import Link from 'next/link';
import { HeaderSelection } from '@/components/shared/icons';

export const DesktopNavBar = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className='hidden sm:block'>
      <NavigationMenuList className='group flex flex-1 list-none items-center justify-center space-x-1'>
        <NavigationMenuItems activeRoute={pathname} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = memo(
  forwardRef<
    HTMLAnchorElement,
    ComponentPropsWithoutRef<'a'> & {
      icon?: React.ComponentType<{ className?: string }>;
    }
  >(({ className, title, children, icon: Icon, ...props }, ref) => {
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
              {Icon && <Icon className='h-4 w-4' />}
              <div className='text-sm font-medium leading-none'>{title}</div>
            </div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  })
);
ListItem.displayName = 'ListItem';

const NavigationMenuItems = memo(({ activeRoute }: { activeRoute: string }) => {
  return (
    <>
      {navItems.map((item) => (
        <NavigationMenuItem key={item.href} className='relative'>
          {item.href === '/'
            ? activeRoute === '/' && <HeaderSelection />
            : activeRoute.startsWith(item.href) && (
                <HeaderSelection
                  className={item.hasSubmenu ? 'scale-110' : undefined}
                />
              )}

          {item.hasSubmenu ? (
            <>
              <NavigationMenuTrigger
                className={navigationMenuTriggerStyles.header()}
              >
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {item.items?.map((subheading) => (
                    <div key={subheading.title}>
                      <ListItem
                        title={subheading.title}
                        href={subheading.href}
                        icon={subheading.icon}
                      >
                        {subheading.description}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </>
          ) : (
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyles.header()}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      ))}
    </>
  );
});
NavigationMenuItems.displayName = 'NavigationMenuItems';
