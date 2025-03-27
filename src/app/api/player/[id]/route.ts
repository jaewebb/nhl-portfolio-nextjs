import { NextRequest, NextResponse } from 'next/server'

import backupPlayer from '@/app/data/PlayerDetails.json'

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  try {
    const { id, } = await props.params
    const url = `${process.env.API_BASE_URL}/player/${id}/landing`

    const data = await fetch(url)
    const player = await data.json()
    
    return NextResponse.json(player, { status: 200, })
  } catch (error) {
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    console.log(error)
    return NextResponse.json(backupPlayer, { status: 500, })
  }
}
