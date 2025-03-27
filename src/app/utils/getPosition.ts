import { Position } from '@/app/types/Position'

export default function getPosition(position: Position) {
  // const t = (c: string) => `${c}`

  switch (position) {
    case 'C':
      return 'Center'
      // return t('position.center')
    case 'L':
      return 'Left wing'
      // return t('position.left')
    case 'R':
      return 'Right wing'
      // return t('position.right')
    case 'D':
      return 'Defense'
      // return t('position.defense')
  }
}