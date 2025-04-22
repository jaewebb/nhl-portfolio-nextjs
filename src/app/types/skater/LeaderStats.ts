import { ApiLeader } from '@/app/types/leader'

export interface LeaderStats {
  goalsSh: ApiLeader[]
  assists: ApiLeader[]
  goalsPp: ApiLeader[]
  faceoffLeaders: ApiLeader[]
  penaltyMins: ApiLeader[],
  goals: ApiLeader[],
  points: ApiLeader[],
  toi: ApiLeader[]
}