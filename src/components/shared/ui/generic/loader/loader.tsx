// Utility Imports
import { cn } from '@/lib/utils/common';

interface LoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

// Component: Loader
// Description: Loader for the website.
export function Loader({
  className,
  size = 'md',
  text = 'Loading...'
}: LoaderProps) {
  return (
    <div
      className={cn(
        'flex min-h-[50vh] flex-col items-center justify-center gap-4',
        'bg-gradient-to-b from-transparent to-black/5 dark:to-white/5',
        className
      )}
    >
      {/* Spinner */}
      <div
        className={cn(
          'relative',
          size === 'sm' ? 'h-6 w-6' : size === 'md' ? 'h-8 w-8' : 'h-12 w-12'
        )}
      >
        <div
          className={cn(
            'absolute h-full w-full rounded-full border-2 border-t-primary',
            'animate-spin [animation-duration:1.5s]',
            size === 'sm' ? 'border-2' : size === 'md' ? 'border-3' : 'border-4'
          )}
        />
      </div>

      {/* Loading Text */}
      <p
        className={cn(
          'animate-pulse font-body text-muted-foreground',
          size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'
        )}
      >
        {text}
      </p>
    </div>
  );
}

// Specialized loading screens
export function PageLoading() {
  return (
    <Loader
      size='lg'
      className='min-h-screen'
      text='Loading your adventure...'
    />
  );
}

export function ContentLoading() {
  return <Loader size='md' text='Preparing content...' />;
}

export function ComponentLoading() {
  return <Loader size='sm' text='Just a moment...' />;
}
