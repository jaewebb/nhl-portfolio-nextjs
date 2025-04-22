import { NextResponse } from 'next/server'

import backupTeams from '@/app/data/Teams.json'

export async function GET() {
  try {
    const url = `${process.env.STATS_API_BASE_URL}/en/team`

    const data = await fetch(url)
    const teams = await data.json()

    return NextResponse.json(teams?.data, { status: 200, })
  } catch (error) {
    console.log(error)
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    return NextResponse.json(backupTeams, { status: 500, })
  }
}
