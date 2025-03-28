'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/utils/fetcher'

import PlayerSpotlightCard from '@/app/components/PlayerSpotlightCard'
import { type PlayerSpotlight } from '@/app/types/PlayerSpotlight'

export default function PlayerSpotlight() {
  const { data, error, isLoading } = useSWR('api/player/spotlight', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <h1 className="px-8">Player Spotlight</h1>
      <div className="grid grid-cols-4 items-center justify-items-center min-h-screen p-8 gap-16">
        {
          data.map((player: PlayerSpotlight) => (
            <PlayerSpotlightCard key={player.playerId} player={player} />
          ))
        }
      </div>
    </div>
  )
}
