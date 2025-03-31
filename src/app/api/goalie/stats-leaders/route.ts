import { NextResponse } from 'next/server'

import backupGoalieLeaders from '@/app/data/GoalieStatsLeaders.json'

export async function GET() {
  try {
    const url = `${process.env.API_BASE_URL}/goalie-stats-leaders/current`

    const data = await fetch(url)
    const goalie = await data.json()

    if (goalie.status === 'error') return NextResponse.json({ error: goalie.message, }, { status: goalie.code, })
    return NextResponse.json(goalie, { status: 200, })
  } catch (error) {
    console.log(error)
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    return NextResponse.json(backupGoalieLeaders, { status: 500, })
  }
}
