// Essential Imports
import Link from 'next/link';
import { memo } from 'react';

// Component Imports
import { Logo } from '../../shared/icons';
import { NavBar } from './nav-bar';
import AuthButton from './auth-button';

// Memoized Logo Link Component
const LogoLink = memo(() => (
  <Link href='/' scroll={false} aria-label='Home'>
    <Logo
      color='white'
      className='transform transition duration-300 hover:translate-x-4 hover:translate-y-4 hover:-skew-y-6 hover:scale-150 hover:cursor-pointer hover:ease-in-out'
      aria-hidden='true'
    />
  </Link>
));
LogoLink.displayName = 'LogoLink';

// Header Component
// The header component for the website, which includes the logo, navigation bar, and Auth flow.
export const Header = memo(() => {
  return (
    <header
      className='sticky top-0 z-50 bg-gradient-to-b from-black to-transparent backdrop-blur-sm backdrop-opacity-90'
      role='banner'
      aria-label='Site Header'
    >
      {/* Container */}
      <div className='mx-auto max-w-7xl px-4'>
        {/* Mobile */}
        <div className='flex h-16 items-center justify-between sm:hidden'>
          <LogoLink />

          <div className='flex items-center justify-between space-x-2'>
            {/* Navbar */}
            <NavBar />

            {/* Auth Button */}
            <AuthButton />
          </div>
        </div>

        {/* Desktop */}
        <div className='hidden h-16 items-center justify-between sm:flex'>
          <LogoLink />

          {/* Navbar */}
          <NavBar />

          {/* Auth Button */}
          <AuthButton />
        </div>
      </div>
    </header>
  );
});
Header.displayName = 'Header';
