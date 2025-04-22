import { Suspense } from 'react'

import Loading from '@/app/components/Loading'
import PlayerDetails from '@/app/components/player/PlayerDetails'

import { PlayerInfo } from '@/app/types/player/PlayerInfo'

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const res = await fetch(`${process.env.BACKEND_URL}/api/player/${id}`)
  const player: PlayerInfo = await res.json()

  return (
    <Suspense fallback={<Loading />}>
      <PlayerDetails player={player} />
    </Suspense>
  )
}
