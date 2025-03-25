import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  try {
    const { id, } = await props.params
    const url = `${process.env.API_BASE_URL}/player/${id}/landing`

    const data = await fetch(url)
    const player = await data.json()
    
    return NextResponse.json(player, { status: 200, })
  } catch (error) {
    return NextResponse.json({ error, }, { status: 500, })
  }
}
