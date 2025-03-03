import * as ProgressPrimitive from '@radix-ui/react-progress';

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  innerClassName?: string;
}
