// Essential Imports
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import { Metadata } from 'next'

// Component Imports
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { northwell, firaCode, homemadeApple, playfairDisplay, sourceSans3 } from "@/components/shared/fonts";

// Style Imports
import "./globals.css";

// Utility Imports
import { cn } from "@/lib/utils";

// Metadata and Viewport for the webpage
export const metadata: Metadata = {
  title: "Divij Jain - In Pursuit Of Living The Adventure",
  description:
    "Embark on a captivating journey through code and wanderlust with Divij Jain, a software engineer in pursuit of adventure and exploration.",
  twitter: {
    card: "summary_large_image",
    title: "Divij Jain - In Pursuit Of Living The Adventure Through Code And Wanderlust",
    description:
      "Embark on a captivating journey through code and wanderlust with Divij Jain, a software engineer in pursuit of adventure and exploration.",
    creator: `@${process.env.TWITTER_HANDLE}`,
  },
  metadataBase: new URL("https://divijjain.com")
};
export const viewport = {
  themeColor: "#000000"
}

// Component: Home Layout 
// Description: Layout for the website, which includes the header, footer, and analytics, and wraps the main content.
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          northwell.variable,
          playfairDisplay.variable,
          sourceSans3.variable,
          homemadeApple.variable,
          firaCode.variable,
          "dark",
          "font-body"
        )}
      >
        {/* SECTION: Header */}
        <Header />

        {/* SECTION: Main Page Content */}
        <main>
          {children}
        </main>

        {/* SECTION: Footer */}
        <Footer />

        {/* SECTION: Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
