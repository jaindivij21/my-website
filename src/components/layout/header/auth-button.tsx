'use client';

import { LogIn, UserCircle } from 'lucide-react';
import { Button } from '../../shared/ui/building-blocks/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/shared/ui/building-blocks/avatar';
import { useCallback, useRef, useState } from 'react';
import { cn } from '@/lib/utils/common';
import React from 'react';

// Types
interface AuthButtonProps {
  className?: string;
  onLogin?: () => Promise<void>;
  onLogout?: () => Promise<void>;
}

const AuthButton = ({ className, onLogin, onLogout }: AuthButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mounted = useRef(true);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const handleAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await onLogin?.();
    } catch (err) {
      if (mounted.current) {
        setError(err instanceof Error ? err.message : 'Authentication failed');
      }
    } finally {
      if (mounted.current) {
        setIsLoading(false);
      }
    }
  }, [onLogin]);

  return (
    <>
      <Button
        className={cn('hidden sm:flex', className)}
        variant='outline'
        onClick={handleAuth}
        disabled={isLoading}
        aria-label='Login'
      >
        <LogIn className='mr-2 h-4 w-4' aria-hidden='true' />
        {isLoading ? 'Loading...' : 'Login'}
      </Button>

      <Avatar className='h-8 w-8 sm:hidden'>
        <AvatarImage
          src={''}
          alt='User Avatar'
          loading='lazy'
          onError={(e) => {
            e.currentTarget.src = '';
          }}
        />
        <AvatarFallback>
          <UserCircle aria-hidden='true' />
        </AvatarFallback>
      </Avatar>

      {error && (
        <div role='alert' className='mt-2 text-sm text-red-500'>
          {error}
        </div>
      )}
    </>
  );
};

// Memoize the component
export default React.memo(AuthButton);

// Add display name for better debugging
AuthButton.displayName = 'AuthButton';
