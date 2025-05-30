import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

import { ThemeProvider } from '@/app/components/ThemeProvider'
import { ThemeToggle } from '@/app/components/ThemeToggle'

import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NHL Portfolio Site',
  description: 'Display data from the NHL API',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning was recommended in the ShadCN docks when using the themeprovider
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header>
            <ThemeToggle />
          </Header>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
