import { Player } from '@/app/types/player'
import { ShootsCatches } from '@/app/types/ShootsCatches'

export interface PlayerDetails extends Player {
  shootsCatches: ShootsCatches
  heightInInches: number
  weightInPounds: number
  heightInCentimeters: number
  weightInKilograms: number
  birthDate: string
  birthCity: {
    default: string
  }
  birthStateProvince: {
    default: string
  }
  birthCountry: string
}
