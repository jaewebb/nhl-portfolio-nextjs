  'use client'

import useSWR from 'swr'

import { fetcher } from '@/app/utils/fetcher'

import LeaderStatsSection from '@/app/components/leaders/StatsSection'

export default function StatsLeaders() {
  const { data, error, isLoading } = useSWR('/api/goalie/stats-leaders', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1 className="px-8 h2">Goalie Stats Leaders</h1>
      <LeaderStatsSection
        leaders={data?.wins}
        sectionTitle="Wins"
        statName='Wins'
      />
      <LeaderStatsSection
        leaders={data?.shutouts}
        sectionTitle="Shutouts"
        statName='Shutouts'
      />
      <LeaderStatsSection
        isPercent
        leaders={data?.savePctg}
        sectionTitle="Save %"
        statName='Save %'
      />
      <LeaderStatsSection
        decimals={2}
        leaders={data?.goalsAgainstAverage}
        sectionTitle="GAA"
        statName='GAA'
      />
    </div>
  )
}
