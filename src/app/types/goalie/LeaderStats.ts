import { ApiLeader } from '@/app/types/leader'

export interface LeaderStats {
  wins: ApiLeader[],
  shutouts: ApiLeader[],
  savePctg: ApiLeader[],
  goalsAgainstAverage: ApiLeader[]
}