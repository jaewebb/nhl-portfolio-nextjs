export interface Game {
  assists: number
  gameDate: string
  gameId: number
  gameTypeId: number
  goals: number
  homeRoadFlag: string
  opponentAbbrev: string
  pim: number
  plusMinus: number
  points: number
  powerPlayGoals: number
  shifts: number
  shorthandedGoals: number
  shots: number
  teamAbbrev: string
  toi: string
}

export interface GameColumns {
  assists: number
  gameDate: string
  gameId: number
  gameType: string
  goals: number
  homeRoadFlag: 'Home' | 'Away'
  opponentAbbrev: string
  pim: number
  plusMinus: number
  points: number
  powerPlayGoals: number
  shifts: number
  shorthandedGoals: number
  shots: number
  teamAbbrev: string
  toi: string
}