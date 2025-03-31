import { GameType } from '@/app/types/GameType'

export default function getPosition(gameType: GameType) {
  // const t = (c: string) => `${c}`

  switch (gameType) {
    case 1:
      return 'Preseason'
    case 2:
      return 'Regular Season'
    case 3:
      return 'Playoffs'
  }
}