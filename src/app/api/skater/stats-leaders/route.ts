import { NextResponse } from 'next/server'

import backupSkateLeaders from '@/app/data/SkaterStatsLeaders.json'

import { LeaderStats } from '@/app/types/skater/LeaderStats'
import { ApiLeader } from '@/app/types/leader'

export async function GET() {
  try {
    const url = `${process.env.API_BASE_URL}/skater-stats-leaders/current`

    const data = await fetch(url)
    const stats = await data.json()

    const mappedSkaters = stats.map((sl: LeaderStats) => ({
      goalsSh: sl.goalsSh.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      assists: sl.assists.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      goalsPp: sl.goalsPp.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      faceoffLeaders: sl.faceoffLeaders.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      penaltyMins: sl.penaltyMins.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      goals: sl.goals.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      points: sl.points.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
      toi: sl.toi.map((x: ApiLeader) => ({ ...x, playerId: x.id })),
    }))

    return NextResponse.json(mappedSkaters, { status: 200, })
  } catch (error) {
    console.log(error)
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    return NextResponse.json(backupSkateLeaders, { status: 500, })
  }
}
