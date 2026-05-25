import type { Metadata } from 'next'
import './globals.css'
import { Geist } from 'next/font/google'
import { cn } from '@/lib/utils'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Victor Okoye | Software Engineer',
  description:
    'Software engineer specializing in React, Next.js, and TypeScript. Building scalable, performant web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('font-sans', geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}