import { Player } from '@/app/types/player'
import { Name } from '@/app/types/common/Name'

export interface Leader extends Player {
  teamAbbrev: string
  teamName: Name
  teamLogo: string
  value: number
}

import { Position } from '@/app/types/Position'

export interface ApiLeader {
  id: number
  firstName: Name
  lastName: Name
  sweaterNumber: number
  headshot: string
  position: Position
  teamAbbrev: string
  teamName: Name
  teamLogo: string
  value: number
}
