import { GameType } from '@/app/types/GameType'

export default function getPosition(gameType: GameType) {
  const t = (c: string) => `${c}`

  switch (gameType) {
    case 0:
      return 'Preseason'
    case 1:
      return 'Regular Season'
    case 2:
      return 'Playoffs'
  }
}