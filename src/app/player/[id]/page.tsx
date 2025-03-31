import { Suspense } from 'react'

import Loading from '@/app/components/Loading'
import PlayerDetails from '@/app/components/player/PlayerDetails'

import { type Player } from '@/app/types/Player'

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const res = await fetch(`${process.env.BACKEND_URL}/api/player/${id}`)
  const player: Player = await res.json()

  return (
    <Suspense fallback={<Loading />}>
      <PlayerDetails player={player} />
    </Suspense>
  )
}
