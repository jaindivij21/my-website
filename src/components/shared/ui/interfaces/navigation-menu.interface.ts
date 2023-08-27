import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

export interface NavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<
    typeof NavigationMenuPrimitive.Trigger
  > {
  showChevron?: boolean;
}
