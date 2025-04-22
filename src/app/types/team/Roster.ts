import { Name } from '@/app/types/common/Name'
import { Position } from '@/app/types/Position'
import { ShootsCatches } from '@/app/types/ShootsCatches'

export interface Roster {
  id: number
  firstName: Name
  lastName: Name
  sweaterNumber: number
  headshot: string
  positionCode: Position
  shootsCatches: ShootsCatches
  heightInInches: number
  weightInPounds: number
  heightInCentimeters: number
  weightInKilograms: number
  birthDate: string
  birthCity: {
    default: string
  }
  birthCountry: string
  birthStateProvince: {
    default: string
  }
}