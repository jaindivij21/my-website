// Essential Imports
import Link from "next/link"

// Component Imports
import { AuthButton } from "./auth-button"
import { Logo } from "../shared/icons"
import { NavBar } from "./nav-bar"

// Header Component
// The header component for the website, which includes the logo, navigation bar, and Auth flow.
export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-b from-black to-transparent backdrop-blur-sm backdrop-opacity-90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" scroll={false}>
            <Logo
              className="hover:scale-150 hover:translate-x-4 hover:translate-y-4 hover:-skew-y-6 hover:cursor-pointer transition duration-300 hover:ease-in-out" />
          </Link>
          <NavBar />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}