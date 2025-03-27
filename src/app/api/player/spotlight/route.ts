import { NextResponse } from 'next/server'

import backupPlayerSpotlight from '@/app/data/PlayerDetails.json'

export async function GET() {
  try {
    const url = `${process.env.API_BASE_URL}/player-spotlight`

    const data = await fetch(url)
    const players = await data.json()

    if (players.status === 'error') return NextResponse.json({ error: players.message, }, { status: players.code, })
    return NextResponse.json(players, { status: 200, })
  } catch (error) {
    console.log(error)
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    return NextResponse.json(backupPlayerSpotlight, { status: 500, })
  }
}
