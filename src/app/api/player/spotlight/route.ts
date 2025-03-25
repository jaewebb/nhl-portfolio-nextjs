import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const url = `${process.env.API_BASE_URL}/player-spotlight`

    const data = await fetch(url)
    const players = await data.json()

    if (players.status === 'error') return NextResponse.json({ error: players.message, }, { status: players.code, })
    return NextResponse.json(players, { status: 200, })
  } catch (error) {
    return NextResponse.json({ error, }, { status: 500, })
  }
}
