import { NextResponse } from 'next/server'

import backupSkateLeaders from '@/app/data/SkaterStatsLeaders.json'

export async function GET() {
  try {
    const url = `${process.env.API_BASE_URL}/skater-stats-leaders/current`

    const data = await fetch(url)
    const skaters = await data.json()

    if (skaters.status === 'error') return NextResponse.json({ error: skaters.message, }, { status: skaters.code, })
    return NextResponse.json(skaters, { status: 200, })
  } catch (error) {
    console.log(error)
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    return NextResponse.json(backupSkateLeaders, { status: 500, })
  }
}
