"use client"

// Essential Imports
import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

// Component Imports
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  HeaderNavigationMenuTriggerStyle
} from "@/components/shared/ui/navigation-menu"
import HeaderSelection from "../shared/icons/header-selection"
import Icon from "../shared/ui/icon"
import { Logo } from "../shared/icons"

// Utility Imports
import { cn } from "@/lib/utils"

// NavBar Component
// The navigation bar component for the website.
export const NavBar = () => {
  const pathname = usePathname()
  const [activeRoute, setActiveRoute] = React.useState(pathname)

  // Blog Subheadings
  const blogSubheadings: { title: string; href: string; description: string, iconName: string }[] = [
    {
      title: "Lifestyle and Travel",
      href: "/blog/lifestyle-travel",
      description: "Globetrotting to curate life's gallery.",
      iconName: 'compass'
    },
    {
      title: "Technology",
      href: "/blog/technology",
      description: "Navigating the digital frontier.",
      iconName: 'binary'
    }
  ]

  // About Subheadings
  const aboutSubheadings: { title: string; href: string; description: string, iconName: string }[] = [
    {
      title: "Resume",
      href: "/profile/resume",
      description: "Portfolio showcasing my professional journey.",
      iconName: 'award'
    },
    {
      title: "About Me",
      href: "/profile/me",
      description: "A little bit about me.",
      iconName: 'venetian-mask'
    },
    {
      title: "Contact Me",
      href: "/profile/about-me#contact",
      description: "Get in touch.",
      iconName: 'at-sign'
    }
  ]

  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>

          {/* Home */}
          <NavigationMenuItem className="relative">
            {activeRoute === "/" && <HeaderSelection />}
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={HeaderNavigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Blog */}
          <NavigationMenuItem className="relative">
            {activeRoute.startsWith("/blog") && <HeaderSelection />}
            <NavigationMenuTrigger className={HeaderNavigationMenuTriggerStyle()}>Blog</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
          <NavigationMenuItem className="relative">
            {activeRoute.startsWith("/content") && <HeaderSelection />}
            <Link href="/content" legacyBehavior passHref>
              <NavigationMenuLink className={HeaderNavigationMenuTriggerStyle()}>
                Content
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Shop */}
          <NavigationMenuItem className="relative">
            {activeRoute.startsWith("/shop") && <HeaderSelection />}
            <Link href="/shop" legacyBehavior passHref>
              <NavigationMenuLink className={HeaderNavigationMenuTriggerStyle()}>
                Shop
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem className="relative">
            {activeRoute.startsWith("/profile") && <HeaderSelection />}
            <NavigationMenuTrigger className={HeaderNavigationMenuTriggerStyle()}>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo className="w-full" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Divij Jain
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        digital alchemist, globetrotter,
                        forever pursuing wisdom.
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
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: any; }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            <Icon name={icon} size={16} />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
