// Essential Imports
import type { Metadata, Viewport } from 'next';
import { Suspense, type PropsWithChildren } from 'react';

// Components Imports
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import { Loader } from '@/components/shared/ui/generic/loader/loader';

// Utility Imports
import {
  northwell,
  firaCode,
  homemadeApple,
  playfairDisplay,
  sourceSans3
} from '@/components/shared/fonts';
import { cn } from '@/lib/utils/common';
import './globals.css';

// Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://divijjain.com'),
  title: 'Divij Jain - In Pursuit Of Living The Adventure',
  description:
    'Embark on a captivating journey through code and wanderlust with Divij Jain, a software engineer in pursuit of adventure and exploration.',
  keywords: [
    'Divij Jain',
    'Software Engineer',
    'Adventure',
    'Code',
    'Wanderlust'
  ],
  authors: [{ name: 'Divij Jain' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://divijjain.com',
    title: 'Divij Jain - In Pursuit Of Living The Adventure',
    description:
      'Embark on a captivating journey through code and wanderlust with Divij Jain, a software engineer in pursuit of adventure and exploration.'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Divij Jain - In Pursuit Of Living The Adventure Through Code And Wanderlust',
    description:
      'Embark on a captivating journey through code and wanderlust with Divij Jain, a software engineer in pursuit of adventure and exploration.',
    creator: `@${process.env.TWITTER_HANDLE}`
  }
};

// Viewport Configuration
export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

// Component: Root Layout
// Description: Layout for the website, which includes the header, footer, and analytics, and wraps the main content.
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang='en'
      className={cn(
        northwell.variable,
        playfairDisplay.variable,
        sourceSans3.variable,
        homemadeApple.variable,
        firaCode.variable,
        'dark',
        'font-body'
      )}
    >
      <body>
        {/* SECTION: Header */}
        <Header />

        {/* SECTION: Main Page Content */}
        <Suspense fallback={<Loader />}>
          <main className='min-h-screen'>{children}</main>
        </Suspense>

        {/* SECTION: Footer */}
        <Footer />
      </body>
    </html>
  );
}
