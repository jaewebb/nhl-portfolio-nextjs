import { Name } from '@/app/types/common/Name'
import { Position } from '@/app/types/Position'

export interface Player {
  playerId: number
  firstName: Name
  lastName: Name
  sweaterNumber: number
  headshot: string
  position: Position
}
