import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/ThemeProvider'
import { ThemeToggle } from '@/app/components/ThemeToggle'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <header className="flex justify-between p-8">
            Header coming soon!
            <ThemeToggle />
          </header>
          {children}
          <footer className="text-center p-8">Built with 🏒 and 💙 by Jae Webb using React, Next.js, TailwindCSS, SWR, Vercel, ShadCN, and the amazing NHL API</footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
