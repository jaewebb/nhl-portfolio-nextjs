import { NextResponse } from 'next/server'

import backupGoalieLeaders from '@/app/data/GoalieStatsLeaders.json'

import { LeaderStats } from '@/app/types/goalie/LeaderStats'
import { ApiLeader } from '@/app/types/leader'

export async function GET() {
  try {
    const url = `${process.env.API_BASE_URL}/goalie-stats-leaders/current`

    const data = await fetch(url)
    const stats = await data.json()

    const mappedGoalies = stats.map((sl: LeaderStats) => ({
      wins: sl.wins.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      shutouts: sl.shutouts.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      savePctg: sl.savePctg.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      goalsAgainstAverage: sl.goalsAgainstAverage.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
    }))

    return NextResponse.json(mappedGoalies, { status: 200, })
  } catch (error) {
    console.log(error)
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    return NextResponse.json(backupGoalieLeaders, { status: 500, })
  }
}
