// Component Imports
import { AuthButton } from "./authButton"
import { Logo } from "../shared/icons"
import { NavBar } from "./navBar"

// Header Component
// The header component for the website, which includes the logo, navigation bar, and Auth flow.
export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-b from-black to-transparent backdrop-blur-sm backdrop-opacity-90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavBar />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}