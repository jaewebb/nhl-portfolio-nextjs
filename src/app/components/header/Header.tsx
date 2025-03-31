import { ReactNode } from 'react'

import Link from 'next/link'

import '@/app/components/header/header.scss'

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="flex justify-between items-center p-4 bg-secondary text-secondary-foreground mb-8">
      <nav>
        <Link href="/">Player Spotlight</Link>
        <Link href="/skaters/stats-leaders">Skate Leaders</Link>
        <Link href="/goalies/stats-leaders">Goalie Leaders</Link>
      </nav>
      {children}
    </header>
  )
}
