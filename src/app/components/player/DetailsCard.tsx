import * as React from 'react'

import Image from 'next/image'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'

import getPosition from '@/app/utils/getPosition'

import { PlayerDetails } from '@/app/types/player/PlayerDetails'

export default function DetailsCard({ player }: { player: PlayerDetails }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            {`#${ player.sweaterNumber } ${ player.firstName.default } ${ player.lastName.default }`}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <Image
            src={player.headshot}
            alt={`${player.lastName.default}&apos;s headshot`}
            width={300}
            height={400}
            priority
          />
          <ul className="mt-5">
            <li>Position: { getPosition(player.position) }</li>
            <li>Birthday: { player.birthDate }</li>
            <li>Hometown: { player.birthCity?.default }, { player.birthStateProvince?.default ? `${player.birthStateProvince?.default},` : '' } { player.birthCountry }</li>
            <li>Height: { Math.floor(player.heightInInches / 12) }&apos; { player.heightInInches % 12 }&quot; ({ player.heightInCentimeters } cm)</li>
            <li>Weight: { player.weightInPounds }lb ({ player.weightInKilograms }Kg)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
