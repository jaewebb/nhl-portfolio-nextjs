import PlayerDetailCard from '@/app/components/player/DetailCard'

import { goalieColumns, skaterColumns } from '@/app/components/player/lastFiveGames/TableColumns'
import { DataTable } from '@/app/components/player/lastFiveGames/DataTable'

import getPosition from '@/app/utils/getPosition'

import { GameType } from '@/app/types/GameType'
import { type Game, type HomeRoadFlag } from '@/app/types/Game'
import { type Player } from '@/app/types/Player'

function createData(game: Game) {
  return { 
    gameId: game.gameId,
    gameDate: game.gameDate,
    gameType: GameType[game.gameTypeId],
    homeRoadFlag: game.homeRoadFlag == 'H' ? 'Home' : 'Away' as HomeRoadFlag,
    teamAbbrev: game.teamAbbrev,
    opponentAbbrev: game.opponentAbbrev,
    toi: game.toi,

    goals: game.goals,
    assists: game.assists,
    shorthandedGoals: game.shorthandedGoals,
    powerPlayGoals: game.powerPlayGoals,
    points: game.points,
    plusMinus: game.plusMinus,
    shots: game.shots,
    shifts: game.shifts,
    pim: game.pim,

    decision: game.decision,
    gamesStarted: game.gamesStarted,
    goalsAgainst: game.goalsAgainst,
    savePctg: game.savePctg ? `${(game.savePctg * 100).toFixed(2)} %` : '-',
    shotsAgainst: game.shotsAgainst,
    penaltyMins: game.penaltyMins,
  }
}

export default function PlayerDetails({ player }: { player: Player }) {
  const rows = player.last5Games.map(game => createData(game))

  return (
    !player ? <div>No Information Found.</div> :
    <div className="grid grid-cols-1 items-center justify-items-center min-h-screen p-8 gap-16">
      <PlayerDetailCard player={player} />
      {
        getPosition(player.position) === 'Goalie' ?
        <DataTable columns={goalieColumns} data={rows} /> :
        <DataTable columns={skaterColumns} data={rows} /> 
      }
    </div>
  )
}
