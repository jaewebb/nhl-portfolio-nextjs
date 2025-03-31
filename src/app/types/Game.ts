export interface Game {
  // shared
  gameDate: string
  gameId: number
  gameTypeId: number
  homeRoadFlag: 'H' | 'R'
  opponentAbbrev: string
  teamAbbrev: string
  toi: string
  // skaters only
  assists?: number
  goals?: number
  pim?: number
  plusMinus?: number
  points?: number
  powerPlayGoals?: number
  shifts?: number
  shorthandedGoals?: number
  shots?: number
  // goalies only
  decision?: string
  gamesStarted?: number
  goalsAgainst?: number
  penaltyMins?: number
  savePctg?: number
  shotsAgainst?: number
}

export type HomeRoadFlag = 'Home' | 'Away'

export interface GameColumn {
  // shared
  gameDate: string
  gameId: number
  gameType: string
  homeRoadFlag: HomeRoadFlag
  opponentAbbrev: string
  teamAbbrev: string
  toi: string
  // skaters only
  assists?: number
  goals?: number
  pim?: number
  plusMinus?: number
  points?: number
  powerPlayGoals?: number
  shifts?: number
  shorthandedGoals?: number
  shots?: number
  // goalies only
  decision?: string
  gamesStarted?: number
  goalsAgainst?: number
  penaltyMins?: number
  savePctg?: string
  shotsAgainst?: number
}