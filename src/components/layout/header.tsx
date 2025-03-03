// Essential Imports
import Link from 'next/link';

// Component Imports
import { Logo } from '../shared/icons';
import { NavBar } from './nav-bar';
import AuthButton from './auth-button';

// Header Component
// The header component for the website, which includes the logo, navigation bar, and Auth flow.
export const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-gradient-to-b from-black to-transparent backdrop-blur-sm backdrop-opacity-90'>
      {/* Container */}
      <div className='mx-auto max-w-7xl px-4'>
        {/* Mobile */}
        <div className='flex h-16 items-center justify-between sm:hidden'>
          {/* Logo */}
          <Link href='/' scroll={false}>
            <Logo color='white' />
          </Link>

          <div className='flex items-center justify-between space-x-2'>
            {/* Navbar */}
            <NavBar />

            {/* Auth Button */}
            <AuthButton />
          </div>
        </div>

        {/* Desktop */}
        <div className='hidden h-16 items-center justify-between sm:flex'>
          {/* Logo */}
          <Link href='/' scroll={false}>
            <Logo
              color='white'
              className='transition duration-300 hover:translate-x-4 hover:translate-y-4 hover:-skew-y-6 hover:scale-150 hover:cursor-pointer hover:ease-in-out'
            />
          </Link>

          {/* Navbar */}
          <NavBar />

          {/* Auth Button */}
          <AuthButton />
        </div>
      </div>
    </header>
  );
};
