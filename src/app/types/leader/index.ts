import { Position } from '@/app/types/Position'

export interface Leader {
  id: number
  firstName: {
    default: string
    cs: string
    de: string
    es: string
    fi: string
    sk: string
    sv: string
  }
  lastName: {
    default: string
    cs: string,
    fi: string,
    sk: string
  }
  sweaterNumber: number
  headshot: string
  teamAbbrev: string
  teamName: {
    default: string
    fr: string
  }
  teamLogo: string
  position: Position
  value: number
}
