import { NextRequest, NextResponse } from 'next/server'

import backupRoster from '@/app/data/TeamRoster.json'

import { Roster } from '@/app/types/team/Roster'

export async function GET(request: NextRequest, props: { params: Promise<{ team: string }> }) {
  try {
    const { team, } = await props.params
    const url = `${process.env.API_BASE_URL}/roster/${team}/current`

    const data = await fetch(url)
    const roster = await data.json()
    const mappedRoster = {
      forwards: roster.forwards.map((r: Roster) => {
        return { ...r, position: r.positionCode, playerId: r.id }
      }),
      defensemen: roster.defensemen.map((r: Roster) => {
        return { ...r, position: r.positionCode, playerId: r.id }
      }),
      goalies: roster.goalies.map((r: Roster) => {
        return { ...r, position: r.positionCode, playerId: r.id }
      })
    }

    return NextResponse.json(mappedRoster, { status: 200, })
  } catch (error) {
    // will be adding error handling
    // for now I'm using a backup data file to work on the page while I'm disconnected from the internet
    // return NextResponse.json({ error, }, { status: 500, })
    console.log(error)
    return NextResponse.json(backupRoster, { status: 500, })
  }
}
