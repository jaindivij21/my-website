// Component Imports
import { DesktopNavBar } from './desktop-nav-bar';
import { MobileNavBar } from './mobile-nav-bar';

// NavBar Component
export const NavBar = () => {
  return (
    <>
      {/* SECTION: Desktop */}
      <DesktopNavBar />

      {/* SECTION: Mobile */}
      <MobileNavBar />
    </>
  );
};
