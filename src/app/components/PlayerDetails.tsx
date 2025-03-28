import PlayerDetailCard from '@/app/components/PlayerDetailCard'

import { columns } from '@/app/components/playerLastFiveGames/TableColumns'
import { DataTable } from '@/app/components/playerLastFiveGames/DataTable'

import { GameType } from '@/app/types/GameType'
import { type Game } from '@/app/types/Game'
import { type Player } from '@/app/types/Player'

function createData(game: Game) {
  return { 
    gameId: game.gameId,
    gameDate: game.gameDate,
    gameType: GameType[game.gameTypeId],
    goals: game.goals,
    assists: game.assists,
    shorthandedGoals: game.shorthandedGoals,
    powerPlayGoals: game.powerPlayGoals,
    teamAbbrev: game.teamAbbrev,
    opponentAbbrev: game.opponentAbbrev,
    homeRoadFlag: game.homeRoadFlag == 'H' ? 'Home' : 'Away',
    points: game.points,
    plusMinus: game.plusMinus,
    shots: game.shots,
    shifts: game.shifts,
    toi: game.toi,
    pim: game.pim,
   }
}

export default function PlayerDetails({ player }: { player: Player }) {
  const rows = player.last5Games.map(game => createData(game))

  return (
    !player ? <div>No Information Found.</div> :
    <div className="grid grid-cols-1 items-center justify-items-center min-h-screen p-8 gap-16">
      <PlayerDetailCard player={player} />
      <DataTable columns={columns} data={rows} />
    </div>
  )
}
