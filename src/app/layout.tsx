// Essential Imports
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import { Metadata } from 'next'

// Component Imports
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Style Imports
import "./globals.css";

// Metadata for the webpage
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
  metadataBase: new URL("https://divijjain.com"),
  themeColor: "#000000"
};

// Home Layout Component
// Layout for the website, which includes the header, footer, and analytics, and wraps the main content.
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        {/* SECTION: Header */}
        <Header />

        {/* SECTION: Main Page Content */}
        <main className="min-h-screen w-full -mt-16">
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
