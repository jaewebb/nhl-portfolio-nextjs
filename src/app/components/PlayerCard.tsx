import * as React from 'react'

import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip'

import getPosition from '@/app/utils/getPosition'

import { type Player } from '@/app/types/Player'

export default function MediaCard({player}: { player: Player }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={player.teamLogo}
                alt={`${player.fullTeamName.default}&apos;s logo`}
                width={50}
                height={50}
                priority
              />
              {`#${ player.sweaterNumber } ${ player.firstName.default } ${ player.lastName.default }`}
            </div>
            <div>
              {
                player.badges.map(badge => (
                  <TooltipProvider key={`badge-${badge.title.default}`}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar>
                          <AvatarImage src={badge.logoUrl.default} />
                          <AvatarFallback>{badge.title.default}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        {badge.title.default}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))
              }
              </div>
          </div>
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
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
            <li>Team: {player.fullTeamName.default}</li>
            <li>Position: {getPosition(player.position)}</li>
            <li>Birthday: {player.birthDate}</li>
            <li>Hometown: {player.birthCity.default}, {player.birthStateProvince.default}, {player.birthCountry}</li>
            <li>Height: { Math.floor(player.heightInInches / 12) }&apos; { player.heightInInches % 12 }&quot; ({ player.heightInCentimeters } cm)</li>
            <li>Weight: { player.weightInPounds }lb ({ player.weightInKilograms }Kg)</li>
          </ul>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}
