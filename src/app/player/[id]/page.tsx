import { Suspense } from 'react'

import PlayerDetails from '@/app/components/PlayerDetails'

import { type Player } from '@/app/types/Player'

export default async function Page({ params, }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const res = await fetch(`${process.env.BACKEND_URL}/api/player/${id}`)
  const player: Player = await res.json()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlayerDetails player={player} />
    </Suspense>
  )
}
