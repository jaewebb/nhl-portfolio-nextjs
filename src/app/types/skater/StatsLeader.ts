import { Leader } from '@/app/types/leader'

export interface StatsLeaders {
  goalsSh: Leader[]
  assists: Leader[]
  goalsPp: Leader[]
  faceoffLeaders: Leader[]
  penaltyMins: Leader[],
  goals: Leader[],
  points: Leader[],
  toi: Leader[]
}