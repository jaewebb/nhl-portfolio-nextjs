import { Leader } from '@/app/types/leader'

export interface StatsLeaders {
  wins: Leader[],
  shutouts: Leader[],
  savePctg: Leader[],
  goalsAgainstAverage: Leader[]
}