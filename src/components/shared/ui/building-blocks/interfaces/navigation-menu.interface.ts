import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export interface NavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<
    typeof NavigationMenuPrimitive.Trigger
  > {
  showChevron?: boolean;
}

export interface NavigationMenuProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  viewportClassName?: string;
  outerViewportClassName?: string;
}

export interface NavigationMenuViewportProps
  extends React.ComponentPropsWithoutRef<
    typeof NavigationMenuPrimitive.Viewport
  > {
  outerClassName?: string;
}
