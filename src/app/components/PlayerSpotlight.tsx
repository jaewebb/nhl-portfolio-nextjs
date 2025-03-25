'use client'

import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'

import { fetcher } from '@/app/utils/fetcher'

import { type PlayerSpotlight } from '@/app/types/PlayerSpotlight'

export default function PlayerSpotlight() {
  const { data, error, isLoading } = useSWR('api/player/spotlight', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div className="grid grid-cols-4 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      { data.map((player: PlayerSpotlight) => (
          <Link href={`/player/${player.playerId}`} key={player.playerId}>
            <div className="flex">
              { player.name.default }
              <Image
                src={player.teamLogo}
                alt={`${player.teamTriCode}'s logo`}
                width={50}
                height={50}
                priority
              />
            </div>
            <Image
              src={player.headshot}
              alt={`${player.name.default}'s headshot`}
              width={200}
              height={50}
              priority
            />
          </Link>
        ))
      }
    </div>
  )
}
