import { Game } from '@/app/types/Game'
import { Name } from '@/app/types/common/Name'
import { Player } from '@/app/types/player'
import { PlayerDetails } from '@/app/types/player/PlayerDetails'

interface Award {
  trophy: Trophy
  seasons: Season[]
}

interface Badge {
  logoUrl: {
    default: string
    fr: string
  }
  title: {
    default: string
    fr: string
  }
}

interface CareerTotal {
  assists: number
  avgToi: number
  faceoffWinningPctg:number
  gameWinningGoals: number
  gamesPlayed: number
  goals: number
  otGoals: number
  pim: number
  plusMinus: number
  points: number
  powerPlayGoals: number
  powerPlayPoints: number
  shootingPctg:number
  shorthandedGoals:number
  shorthandedPoints: number
  shots: number
}

interface Season {
  assists: number
  blockedShots: number
  gameTypeId: number
  gamesPlayed: number
  goals: number
  hits: number
  pim: number
  plusMinus: number
  points: number
  seasonId: number
}

interface SeasonTotal {
  assists: number
  avgToi: string
  faceoffWinningPctg: number
  gameTypeId: number
  gameWinningGoals: number
  gamesPlayed: number
  goals: number
  leagueAbbrev: string
  otGoals: number
  pim: number
  plusMinus: number
  points: number
  powerPlayGoals: number
  powerPlayPoints: number
  season: number
  sequence: number
  shootingPctg: number
  shorthandedGoals: number
  shorthandedPoints: number
  shots: number
  teamCommonName: Name
  teamName: Name
  teamPlaceNameWithPreposition:{
    default: string
    fr: string
  }
}

interface Stats {
  assists: number
  gameWinningGoals: number
  gamesPlayed: number
  goals: number
  otGoals: number
  pim: number
  plusMinus: number
  points: number
  powerPlayGoals: number
  powerPlayPoints: number
  shootingPctg: number
  shorthandedGoals: number
  shorthandedPoints: number
  shots: number
}

interface Teammate {
  playerId: number
  lastName:Name
  firstName: Name
  playerSlug: string
}

interface Trophy {
  default: string
  fr: string
}

export interface PlayerInfo extends Player, PlayerDetails {
  isActive: boolean
  currentTeamId: number
  currentTeamAbbrev: string
  fullTeamName: {
    default: string
    fr: string
  }
  teamCommonName:{
    default: string
  }
  teamPlaceNameWithPreposition:{
    default: string
    fr: string
  }
  badges: Badge[]
  teamLogo: string
  heroImage: string
  draftDetails: {
    year: number
    teamAbbrev: string
    round: number
    pickInRound: number
    overallPick: number
  }
  playerSlug: string
  inTop100AllTime: number
  inHHOF: number
  featuredStats: {
    season: number
    regularSeason: {
      subSeason: Stats
      career: Stats
    }
  }
  careerTotals: {
    regularSeason: CareerTotal
    playoffs: CareerTotal
  }
  shopLink: string
  twitterLink: string
  watchLink: string
  last5Games: Game[]
  seasonTotals: SeasonTotal[]
  awards: Award[]
  currentTeamRoster: Teammate[]
}