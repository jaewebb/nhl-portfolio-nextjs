'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/utils/fetcher'

import Loading from '@/app/components/Loading'
import PlayerSpotlightCard from '@/app/components/player/SpotlightCard'
import { type PlayerSpotlight } from '@/app/types/PlayerSpotlight'

export default function PlayerSpotlight() {
  const { data, error, isLoading } = useSWR('api/player/spotlight', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <Loading />
  return (
    <div>
      <h1 className="px-8">Player Spotlight</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 items-center justify-items-center min-h-screen p-8 gap-16">
        {
          data.map((player: PlayerSpotlight) => (
            <PlayerSpotlightCard key={player.playerId} player={player} />
          ))
        }
      </div>
    </div>
  )
}
