import LeaderStatsCard from '@/app/components/leaders/StatsCard'

import { Leader } from '@/app/types/leader';

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
      <div className="grid grid-cols-4 items-center justify-items-center min-h-screen p-8 gap-16">
        {
          leaders.map((leader: Leader) => (
            <LeaderStatsCard
              decimals={decimals}
              isPercent={isPercent}
              key={leader.id}
              leader={leader}
              statName={statName}
            />
          ))
        }
      </div>
    </>
  )
}