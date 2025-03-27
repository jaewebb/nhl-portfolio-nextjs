import { type Game } from '@/app/types/Game'

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
  teamCommonName:{
    default: string
    cs: string
    de: string
    es: string
    fi: string
    sk: string
    sv: string
  }
  teamName:{
    default: string
    cs: string
    de: string
    fi: string
    fr: string
    sk: string
    sv: string
  }
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
  lastName:{
    default: string
  }
  firstName:{
    default: string
    cs: string
    fi: string
    sk: string
  }
  playerSlug: string
}

interface Trophy {
  default: string
  fr: string
}

export interface Player {
  playerId: number
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
  firstName:{
    default: string
  }
  lastName:{
    default: string
  }
  badges: Badge[]
  teamLogo: string
  sweaterNumber: number
  position:'C' | 'L' | 'R' | 'D'
  headshot: string
  heroImage: string
  heightInInches: number
  heightInCentimeters: number
  weightInPounds: number
  weightInKilograms: number
  birthDate: string
  birthCity: {
    default: string
  }
  birthStateProvince: {
    default: string
  }
  birthCountry: string
  shootsCatches: 'L' | 'R'
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