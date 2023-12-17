"use client"

// Essential Imports
import * as React from "react"

// Component Imports 
import * as ProgressPrimitive from "@radix-ui/react-progress"

// Utils Imports
import { cn } from "@/lib/utils"

// Interface Imports
import { ProgressProps } from "./interfaces/progress.interface"

// Component: Progress
// Description: This component is used to display a progress bar.
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, innerClassName, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 bg-primary transition-all", innerClassName)}
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
      }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
