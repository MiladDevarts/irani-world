
import Navigation from '@/components/Layout/Navigation'
import './globals.css'
import type { Metadata } from 'next'

import { Open_Sans } from 'next/font/google'
import { Outfit } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
})
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Irani World',
  description: 'For Persians',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full h-[90vh] lg:overflow-hidden ${openSans.variable} ${outfit.variable}`}>
        {children}
        <Navigation />
      </body>
    </html>
  )
}
