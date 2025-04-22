'use client'

import { createContext, useState } from 'react'
import useSWR from 'swr'

import { fetcher } from '@/app/utils/fetcher'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel'

import Loading from '@/app/components/Loading'
import TeamAutocomplete from '@/app/components/team/TeamAutocomplete'
import PlayerDetailsCard from '@/app/components/player/DetailsCard'

import { PlayerDetails } from '@/app/types/player/PlayerDetails'

const TeamContext = createContext('')

function PositionSection({ title, players }: { title: string, players: PlayerDetails[] }) {
  return players && (
    <>
      <h2 className="px-16">{title}</h2>
      <div className="px-16 py-8">
        <Carousel>
          <CarouselContent>
          {
            players.map((player: PlayerDetails) => (
              <CarouselItem className="md:basis-1/3 basis-3/3" key={player.playerId}>
                <PlayerDetailsCard key={player.playerId} player={player} />
              </CarouselItem>
            ))
          }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}
export default function Page() {
  const [team, setTeam] = useState('')
  const { data, error, isLoading } = useSWR(team ? `/api/team/${team}` : null, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <Loading />

  return (
    <main>
      <TeamContext.Provider value={team}>
        <TeamAutocomplete className="px-16" handleSetValue={setTeam} />
        { data &&
          <div className="pt-8">
            <PositionSection players={data.forwards} title="Forwards" />
            <PositionSection players={data.defensemen} title="Defensemen" />
            <PositionSection players={data.goalies} title="Goalies" />
          </div>
        }
        </TeamContext.Provider>
    </main>
  )
}
