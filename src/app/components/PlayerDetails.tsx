import Image from 'next/image'

import { type Player } from '@/app/types/Player'

export default function PlayerDetails({ player }: { player: Player }) {
  return (
    <div className="grid grid-cols-4 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex">
        { player.firstName.default } { player.lastName.default }
        <Image
          src={player.teamLogo}
          alt={`${player.fullTeamName.default}'s logo`}
          width={50}
          height={50}
          priority
        />
      </div>
      <Image
        src={player.headshot}
        alt={`${player.lastName.default}'s headshot`}
        width={200}
        height={50}
        priority
      />
    </div>
  )
}
