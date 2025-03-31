import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'

import { type PlayerSpotlight } from '@/app/types/PlayerSpotlight'

export default function SpotlightCard({player}: { player: PlayerSpotlight }) {
  return (
    <Link href={`/player/${player.playerId}`} key={player.playerId}>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={player.teamLogo}
                  alt={`${player.name.default}&apos;s team logo`}
                  width={50}
                  height={50}
                  priority
                />
                {`#${ player.sweaterNumber } ${ player.name.default }`}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={player.headshot}
            alt={`${player.name.default}&apos;s headshot`}
            width={300}
            height={400}
            priority
          />
        </CardContent>
      </Card>
    </Link>
  )
}
