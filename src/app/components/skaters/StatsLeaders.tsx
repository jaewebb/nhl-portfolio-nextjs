  'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/utils/fetcher'

import LeaderStatsSection from '@/app/components/leaders/StatsSection'
import Loading from '@/app/components/Loading'

export default function StatsLeaders() {
  const { data, error, isLoading } = useSWR('/api/skater/stats-leaders', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <Loading />

  return (
    <div>
      <h1 className="px-8 h2">Skater Stats Leaders</h1>
      <LeaderStatsSection
        leaders={data?.goals}
        sectionTitle="Goals"
        statName='Goals'
      />
      <LeaderStatsSection
        leaders={data?.points}
        sectionTitle="Points"
        statName='Points'
      />
      <LeaderStatsSection
        leaders={data?.assists}
        sectionTitle="Assists"
        statName='Assists'
      />
      <LeaderStatsSection
        leaders={data?.goalsPp}
        sectionTitle="Power Play Goals"
        statName='Power Play Goals'
      />
      <LeaderStatsSection
        leaders={data?.goalsSh}
        sectionTitle="Shorthanded Goals"
        statName='Shorthanded Goals'
      />
      <LeaderStatsSection
        leaders={data?.penaltyMins}
        sectionTitle="Penalty Mins"
        statName='Penalty Mins'
      />
      <LeaderStatsSection
        isPercent
        leaders={data?.faceoffLeaders}
        sectionTitle="Faceoff Leaders"
        statName='Faceoff %'
      />
      <LeaderStatsSection
        decimals={2}
        leaders={data?.toi}
        sectionTitle="Time on Ice"
        statName='Time on Ice'
      />
    </div>
  )
}
