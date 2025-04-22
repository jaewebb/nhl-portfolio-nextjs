import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel'

import LeaderStatsCard from '@/app/components/leaders/StatsCard'

import { Leader } from '@/app/types/leader'

type StatsSectionProps = {
  decimals?: number
  isPercent?: boolean
  sectionTitle: string
  leaders: Leader[]
  statName: string
}

export default function StatsSection({
  decimals,
  isPercent,
  sectionTitle,
  leaders,
  statName,
}: StatsSectionProps) {
  return (
    <>
      <h2 className="px-8 pt-8 h3">{ sectionTitle }</h2>
      <div className="px-16 py-8">
        <Carousel>
          <CarouselContent>
          {
            leaders.map((leader: Leader) => (
              <CarouselItem className="md:basis-1/3 basis-3/3" key={leader.playerId}>
                <LeaderStatsCard
                  decimals={decimals}
                  isPercent={isPercent}
                  leader={leader}
                  statName={statName}
                />
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